import re
import os
from lib.funcs import *
from lib.filters import *
import click


def process_file(file_name):
    if not "NCHC_DOC_TOKEN" in os.environ:
        click.echo('$NCHC_DOC_TOKEN need to be set in environ.', err=True)
    NCHC_DOC_TOKEN = os.getenv("NCHC_DOC_TOKEN")
    
    content = open(file_name, 'r').read()
    man_hash = get_nchc_man_hash(content)
    if not man_hash:
        click.echo(click.style("\t❌ No nchc (man.twcc.ai) doc-url for %s."%file_name, fg='magenta'))
        return "fail"
    else:   
        click.echo(click.style("✅ Updating NCHC doc: %s. for %s."%(man_hash, file_name), fg='green'))
    
        tws_filter = filter(content)
        tws_filter.do_filter()
        
        send_request(NCHC_DOC_TOKEN, man_hash, tws_filter.results())
        return "ok"


@click.command()
@click.option('--tws-folder', '-tws', 'tws', required=True, help='TWS doc folder ')
def sync(tws):
    
    # https://stackoverflow.com/a/19309964
    all_files = [os.path.join(dp, f) for dp, dn, fn in os.walk(os.path.expanduser(tws)) for f in fn ]
    md_files = [ process_file(fn) for fn in all_files if re.search(".md$", fn)]
    click.echo("Processed: %d, ok: %d, fail: %d"%(len(md_files), len([x for x in md_files if x =='ok']), len([x for x in md_files if x =='fail'])))        


if __name__ == '__main__':
    sync()




import re
import requests
import json


def send_request(man_api, nchc_doc, content=''):
    try:
        response = requests.patch(
            url="https://man.twcc.ai/api/openAPI/v1/notes/%s"%(nchc_doc),
            headers={
                "Authorization": "Bearer %s"%man_api,
                "Content-Type": "application/json; charset=utf-8",
            },
            data=json.dumps({
                "content": content
            })
        )
        # print('Response HTTP Status Code: {status_code}'.format(status_code=response.status_code))
        # print('Response HTTP Response Body: {content}'.format(content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')
        
        
        
def get_nchc_man_hash(tws_cnt, tag_type='preview'):
    if tag_type == 'preview':
        token = 'sync_original_preview'
    if tag_type == 'production':
        token = 'sync_original_production'
    
    r1 = re.findall(r"%s: 'https://man.twcc.ai/(\w+)'"%token,tws_cnt, re.MULTILINE)
    
    if len(r1) >0:
        return r1[0]
    else:
        return False
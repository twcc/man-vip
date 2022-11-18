import re

class filter:
    def __init__(self, content):
        self.cnt = content
        self.res = ''
        
        
    def do_filter(self):
        self._pre();
        self.apply_rules()
        self._post();
        
    def _pre(self):
        self.lines = self.cnt.split("\n")
        
    def apply_rules(self):
        self.skip_tokens()
        
    def _post(self):
        self.res = "\n".join([li for li in self.lines if len(li) > 0 ])
        
    def results(self):
        return self.res
    
    def skip_tokens(self):
        skip_tokens = ['sidebar_position', 'title', 'sync_original_production', 'sync_original_preview', '---']
        for idx in range(len(self.lines)):
            li_cnt = self.lines[idx]
            for token in skip_tokens:
                if re.search(token, li_cnt):
                    self.lines[idx] = ''
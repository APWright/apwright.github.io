import pandas as pd
from scholarly import scholarly
import sys

author = scholarly.search_author_id("fow4eKkAAAAJ")
author = scholarly.fill(author, sections=["publications"])  # ty:ignore[invalid-argument-type]

pub_list = []
for pub in author["publications"]:
    pub = scholarly.fill(pub)
    pub_record = pub["bib"]
    pub_record["url"] = pub["pub_url"]
    pub_record["citations"] = pub["num_citations"]
    pub_list.append(pub_record)

papers_df = pd.DataFrame(pub_list)


papers_df.to_json('data/scholar.json',orient='records')

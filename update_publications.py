import pandas as pd
from tqdm import tqdm
from scholarly import scholarly
import sys

author = scholarly.search_author_id("fow4eKkAAAAJ")
author = scholarly.fill(author, sections=["publications"])  # ty:ignore[invalid-argument-type]

pub_list = []
for pub in tqdm(author["publications"]):
    pub = scholarly.fill(pub)
    bib = pub["bib"]
    pub_record = {}
    try:
        pub_record["title"] = bib["title"]
        pub_record["pub_year"] = bib["pub_year"]
        pub_record["author"] = bib["author"]
        pub_record["citation"] = bib["citation"]
        pub_record["url"] = pub["pub_url"]
        pub_record["citations"] = pub["num_citations"]
        pub_list.append(pub_record)
    except:
        print(f'Error processing paper: {bib}')

papers_df = pd.DataFrame(pub_list).dropna()


papers_df.to_json('data/scholar.json',orient='records')

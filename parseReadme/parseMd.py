import json
from collections import OrderedDict

file_data = OrderedDict()

fp = open('README.test.md', 'r')
lines = fp.readlines()

data = []

for line in lines:
	if "|" in line:
		a, idx, titleLink, date, e = line.split("|")
		tmp = titleLink.split("(")
		if len(tmp) > 1:
			title, url = tmp[0], tmp[1]
			title = title[1:-1]
			url = url[:-1]

			data.append({
				"id": int(idx),
				"title": title,
				"summary": "",
				"url": url,
				"date": date,
				"tags": ""
			})

data = sorted(data, key=(lambda x:x['id']))

file_data["data"] = data
with open('../src/data.json', 'w', encoding="utf-8") as make_file:
	json.dump(file_data, make_file, ensure_ascii=False, indent='\t')

---
title: IPO信息
sidebarDepth: false
---

## 公司IPO信息表

:::: tabs type:border-card
::: tab PEL
```autoit
//取当前品种上市日期。
FINSTOCKINFORMATION('' ,'listDate');

//取600789品种上市日期。
FINSTOCKINFORMATION('600789' ,'listDate' );
```
:::
::: tab VBA
```vb
'取600789品种上市日期
a = marketdata.GetT_STOCK_INFORMATION_Item("600789","sh","listDate")
application.MsgOut a 
set a= nothing            '销毁对象
```
:::
::: tab python
```py
#获取600789'上市日期'。
listDate = fin_stock_information('SH600789','listDate')
#判断获取数据长度是否足够。
if len(listDate)<1:
    print("财务数据获取不足,请补充下载")
else:
    print(listDate)
```
:::
::::


|名称 | 描述 |
|:---------:|:----------:|
|	secID	|	市场+股票代码，如SH600007	|
|	ticker	|	股票代码	|
|	secShortName	|	证券简称	|
|	publishDate	|	发布日期	|
|	onlineIssueDate	|	网上发行日期	|
|	listDate	|	上市日期	|
|	issuePrice	|	发行价格	|
|	issueShares	|	股票发行量	|
|	onlineIssueShares	|	网上发行股数	|
|	offlineIssueShares	|	网下发行股数	|
|	newIssueShares	|	新股发行量	|
|	transShares	|	老股转让数量	|
|	newIssueRaiseCap	|	新股募集资金	|
|	OldShareRaiseCap	|	老股募集资金	|
|	issuePE	|	发行市盈率	|
|	onlineIssueLottoRatio	|	中签率	|
|	onlineIssueCode	|	网上申购代码	|
|	firstDayOpenPrice	|	上市首日开盘价	|
|	firstDayClosePrice	|	上市首日收盘价	|
|	onlineSubMax	|	个人申购上限(股)	|
|	onlineSubMin	|	最小申购数量(股)	|
|	listStatusCD	|	0-正常;1-已发行未上市;2-暂停上市;3-摘牌;4-发行失败;5-退市整理	|
|	delistDate	|	摘牌日期	|
|	equTypeCD	|	股票分类编码。例如，A-A股；B-B股。	|
---
layout: layouts/guide.njk
---

ここでは実際にスタチンという薬剤の効果を調べた研究論文を読んでみます．原著論文は[ここ](https://www.nejm.org/doi/full/10.1056/nejm199511163332001)で公開されていますが，日本語に[翻訳したもの](/guide/statistics/statin_raw)もあります．これらを読みながら，現実世界では薬の効果をどう調べているのかを批判的に見ていきましょう．

## 要旨(Abstract)

まず論文はAbstractから始まります．Abstractは論文の簡潔なまとめをbackground(その研究をやることにした背景理由)・medthods(その研究の方法)・results(結果)・conclusions(結論)に分けて述べます．この形式は医学論文ではどれも共通しています．まずはこれを読んでいきます．論文の該当箇所を読んだ後にこちらを読むことを想定して書いています．

## 背景(backgroud)

まず「冠動脈性心疾患(ACS)」について補足をする．心臓(に限らず全ての臓器)は栄養を血液からもらっている．だから血管が何らかの原因で詰まって血液を届けられなくなると心臓の細胞は死んでしまう．心臓を栄養する血管は冠動脈と呼ばれる．すなわち，ACSは冠動脈が詰まることで心臓に血液が届けられなくなり，心臓の機能がやられる病気である．心臓がやられると全身に血液が届けられなくなるので，全身の臓器がやられて最悪死に至る．ACSは，完全に冠動脈が詰まった最も重篤な心筋梗塞や，詰まっていないが細くなっている狭心症に分けられる．

論文中の「非致死的心筋梗塞」とは，病院搬送時に死亡に至っていなかった心筋梗塞のこと．

まとめると，スタチンという薬剤の1種であるプラバスタチンには，コレステロール値を下げる効果があり，コレステロールを下げることで心臓の疾患による死亡率が下がるかをRCTで調べることにしたということ．

## 方法(methods)

コレステロール値は正規分布していると考えられるため，$N(272,23^2)$に従っていると考えられる．SDは標準偏差(stadard deviation)のこと．

臨床的エンドポイントについて補足する．プラバスタチンとプラセボで何を見たいのか．例えばDr.Kの実験では薬によって背が伸びるのかどうかが見たかった．今回の場合は，背景に描いてあるとおり，「非致死的心筋梗塞と冠動脈性心疾患による死亡の合計発生率が減少するかどうか」である．このような何について介入の効果を測定したいのかを表したのがエンドポイントである．エンド(end)には最後とか目標とかいう意味があるので最終目標というイメージで捉えるといい．一方，プラバスタチンの直接的な効果としては，コレステロール値を下げることである．そして，これによってACSの死亡を下げていると考えられる．このように最終的ではないものの，最終目標と関連する目標をセカンダリエンドポイント(secondary endpoint)と呼ぶことがある．これを踏まえると，ACSによる死亡の減少はプライマリエンドポイント(primary endpoint)となる．

## 結果(results)

これについては，本文中で詳しく書かれるので，それを見ることにする．

## 結論(conclusions)

- 心筋梗塞の既往のない中等度の高コレステロール血症の男性において
- プラバスタチンは
- プラセボと比べて
- 心血管系以外の原因による死亡のリスクに悪影響を及ぼすことなく，心筋梗塞の発生率と心血管系の原因による死亡を有意に減少させる．
{.pt-4}

というのがこの論文の結論です．これを形式化すると，

- 母集団は誰で，(Population)
- どんな介入をすると，(Intervention)
- 何と比べて (Comparison)
- どんな効果が得られるのか (Outcome)
{.pt-4}

のようになります．4つの頭文字をとってPICOといいます．どれが欠けても研究の意義を正しく伝えることはできません．

![](http://lh4.ggpht.com/_YdcGIDp1An8/TS_bnkmmOBI/AAAAAAAAAKo/yCRLtjJZES8/s800/PICO1.jpg)


## 各論へ

Abstractが終わると，background・medthods・resultsの詳細と，discussion(議論)が述べられる．discussionではconclusions(結論)で述べられていない，この実験の限界などが述べられるがこちらが批判的な吟味のためにはとても重要．

## backgroud詳細編

まずはじめに今までの研究の問題点が述べられる．これがなければこの研究のモチベーションがどこにあるのか分からない．簡単にまとめると，

1. 過去の試験は，いずれも冠動脈疾患死の予防における脂質低下剤の効果をはっきり示すだけの統計的な力を持っていない．そのためには，(a)イベント発生率の高い集団を調査する、(b)サンプルサイズを大きくする、(c)より強力な脂質低下剤を使用する、などの方法が必要．
2. 過去の試験の一部では、薬剤群では非致死的心筋梗塞の発生率が低下するものの，総死亡率が上昇する可能性が示唆されている．つまり，全体の死亡を下げることを目的に，心血管系が原因での死亡を下げようとしているのに，薬剤を使うことが，他の疾患での死亡を上がるなら，意味がないことになる．がこれは偶然なのか薬のせいなのか分からない．過去の論文では帰無仮説H0が棄却できていない．

という課題がある．そこで，新しい脂質低下薬ができたのでその効果を調べることにした，というのが背景にある．

## methods詳細編

## デザイン
この研究はプラバスタチンの効果を調べる二重盲検化ランダム化比較試験．母集団は，コレステロール値の高い中年男性．エンドポイント(薬の効果を何で判定するか)は

- プライマリ：心疾患による死亡率の低下
- セカンダリ：あらゆる原因による死亡，冠動脈血行再建術の頻度(つまりどれだけ治療が行われたか)

そして5年間経過を追う．

参考文献16の論文は，実験に先立って発表されるプロトコルや評価項目などをまとめた論文．事前に発表することで，有意差がでたものだけを出版する選択バイアスやP値ハッキングが防げる．また，6000人というサンプルサイズも，16の論文を読むと，薬の予想される効果などから計算されていることがわかる．


## 募集と追跡調査

16万人の中年男性をWest of Scotland地区全域から集めようとした．そのうち，8万人が実際に集まった．彼らを検査して，

1. 継続してコレステロール値が高い
2. 開始時に心電図で異常が見られない
3. ACSや他の心臓の疾患の既往がないこと．

の条件に当てはまる男性を選んだ．条件2.3は実験の開始時点でACSをもっているような人を除外するための基準．これらの条件は母集団が「心筋梗塞の既往のない中等度の高コレステロール血症の男性」であることから妥当．

## 統計解析

intention to treatで解析を行う．これについては[こちら](https://www.igaku-shoin.co.jp/paper/archive/y2011/PA02915_08)を参照．

「log-rank検定」や「Cox比例ハザードモデルによるプラバスタチン投与によるリスクの相対的低下」など，知らない検定がでてくる．このようなときには，簡単に検索して概要を掴むくらいで読み進めるのがいい．例えば log rank testについては，

*a popular test to test the null hypothesis of no difference in survival between two or more independent groups.*
*2つ以上の独立したグループ間の生存率に差がないという帰無仮説を検定するための一般的な検定*

と出てくるから，「生存率に差がない(H0)」という仮説のもとでは，2つのグループ(サンプル)と母パラメータから計算される値が何らかの統計分布に従って，今回のサンプルで実際に計算された値がH0の元では確率αでしか起こらない場合には，仮説を棄却するという方法をとるのだろうと理解できる．このぐらいの概要が分かれば実際の細かい統計分布が何かを理解しなくても，データを批判的に解釈することはある程度できる．

同様に「Cox比例ハザードモデル」については[ハザード比](https://blincyto.jp/member_only/aabp/nl_medical_statistics08.asp?)とは何かを理解していればとりあえず十分．*Cox比例ハザードモデルによりプラバスタチン投与によるリスクの相対的低下（95％信頼区間付き）を算出した*とあるので，ハザード比がどれだけ低下したかを見ていることが分かる．

サブグループ解析が行われている．簡単には高リスク群と低リスク群，血管疾患の既往あり群と既往なし群，ベースラインで脂質値が高い群と低い群の3通りで解析をしようとしている．これも，*事前定義サブグループ*とあるように，事前にどのサブグループでやるのか報告しないと，事後に有意差があるようなサブグループを作り出すことが可能になってしまう．

研究の早期中止は次のような理由で起こる．

- 効果がめちゃくちゃあって，プラセボ群にこの治療をやるのは倫理的にまずい
- サンプルがなかなか集まらない．

詳しくは[このpdf](http://www.jcog.jp/basic/policy/A_020_0010_06.pdf)を参照．


## result詳細編

*合計6595人の被験者が無作為化を受けた* *（被験者一人当たり平均4.9年）の追跡を受けた*

つまり予定通りのサンプルサイズとこれも予定通りの追跡期間となっている．

*スクリーニングされた被験者と無作為化された被験者の臨床的特徴については、以前に報告されている26*

とあるが，これは，

Table 1 プラバスタチン群とプラセボ群の基本的な特徴

とあるが，これは　　この規模の試験で予想されたように、各群はよくバランスがとれていた。

*試験集団全体の平均（±SD）血漿コレステロール値は272±23mg/dl、LDLコレステロール値は192±17mg/dl、HDLコレステロール値は44±9mg/dlであった．*

ちなみに，これらの値は高いけれども日本人のコレステロール値が高い人と大きな差はない．(一方外国の肥満は日本人の肥満と比べられない)

プラセボ群とプラバスタチン群の累積治療中止率について調べているが，これは薬の服用や服用の面倒くささ(1日10回飲む必要があったら誰も続けられない)などによって実際に内服を続けられているのか，ということと，脱落者がいることによってバイアスが生まれていないのことを確認している．ITT解析も同じような目的．結果有意差はなかった．

### Figure 1
プラバスタチン治療が血漿LDLコレステロール値に及ぼす影響。
データを実際に受けた治療法に従って分析すると、プラバスタチンは血漿中のコレステロール値を20％、LDLコレステロールを26％（図1）、トリグリセリドを12％低下させ、一方HDLコレステロールは5％増加させたことが明らかになった。プラセボではこのような変化は見られなかった。このデータをintention-to-treatの原則に従って解析したところ、このような解析には、治療を中止した被験者や治療不適合者が含まれるため、LDLコレステロール値の治療群間の差は時間の経過とともに明らかに減少していた。この結果は、実際の治療に基づいた解析では差が維持されていたのとは対照的である。


### Table2
治療グループによる非致死性心筋梗塞または冠動脈性心疾患による死亡が確定するまでの時間のKaplan-Meier解析

### Figure2
治療グループによる非致死性心筋梗塞または冠動脈性心疾患による死亡が確定するまでの時間のKaplan-Meier解析
プラバスタチンはプラセボと比較して、主要評価項目である明確な非致死的心筋梗塞および冠動脈疾患による死亡のリスクを有意に減少させた（減少率、31％；95％信頼区間、17〜43％；P<0.001；5年間のリスクの絶対差、2.4％ポイント）（表2および図2）

### Figure3
Kaplan-Meier解析による治療群別の確定非致死性心筋梗塞（パネルA）、冠動脈疾患による死亡（パネルB）、すべての心血管系原因による死亡（パネルC）、非心血管系原因による死亡（パネルD）およびすべての原因による死亡（パネルE）までの時間
他の主要エンドポイントに対するプラバスタチンの効果は、表2、図3A、図3B、図3C、図3D、および図3Eに示されています。非致死的心筋梗塞のリスクの減少は、心筋梗塞の確定症例を単独で考慮しても、疑い症例を組み合わせて考慮しても有意であった（P<0.001）。主要エンドポイントの解析から無症候性心筋梗塞を除外しても、転帰に影響はなかった（表2）。冠動脈疾患による死亡というエンドポイントについては、確定例と疑い例の両方の解析で有意な治療効果が認められたが（リスク減少、33％；95％信頼区間、1〜55％；P = 0.042）、確定例のみの解析では、おそらくこのグループのイベント数が少なかったため、効果が認められなかった。しかし、リスクは同様に減少していた（28％）。すべての心血管系の原因による死亡に対するプラバスタチン治療の効果を分析したところ、32％のリスクの減少（95％信頼区間、3〜53％；P = 0.033）が観察された。プラバスタチンによる治療は、冠動脈造影（31％；95％信頼区間、10〜47％；P = 0.007）および血行再建術（37％；95％信頼区間、11〜56％；P = 0.009）の頻度の減少と同様に関連していた。

※死亡リスクの減少よりも「1人に効果を及ぼすために必要な資源」という指標のほうがよい．例えば，

非心血管性の原因による死亡は、プラバスタチン群で56例、プラセボ群で62例であった（P = 0.54）。癌、自殺、外傷による死亡者数には治療群間で有意差はなかった。脳卒中はプラバスタチン群で46例（うち致死性6例）、プラセボ群で51例（致死性4例）であった。プラバスタチン群では、非心血管疾患による死亡数が増加しないにもかかわらず、心血管系疾患による死亡数が減少したため、全体の死亡リスクが22％減少した（95％信頼区間、0〜40％、P＝0.051）。

※従来の懸念に応える結果．根本的な「全体の死亡リスクの減少」が見られたことを主張．


### Figure4
サブグループ別の主要エンドポイントの発生率
プラバスタチン治療の有益性は、すべてのサブグループで明らかであった（表3）。ベースライン時に複数の危険因子を有するサブグループやベースライン時に血管系疾患を有するサブグループの被験者数は少なすぎたため、統計的に有意な効果を示すことはできなかった。

母比率の検定をしているが，それはこちらから．
https://toketarou.com/population_proportion/

有害事象
プラバスタチン群では116人の被験者に癌が発生し、プラセボ群では106人に発生した（P = 0.55）。この数字には、悪性黒色腫の症例は含まれているが、軽度の皮膚癌は含まれていない。プラセボ群とプラバスタチン群では、それぞれ、消化器癌が30人と31人、泌尿器癌が26人と32人、呼吸器癌が28人と27人、その他の癌が22人と26人であった。プラバスタチン群では、20名の被験者が筋肉痛を訴え、97名の被験者が筋肉痛を訴えた。プラセボ群では19名、102名であった（Pは有意ではない）。4人の被験者（プラバスタチン群3人、プラセボ群1人）が、クレアチンキナーゼ濃度の上昇（基準値上限の10倍以上）を無症状に繰り返した。アスパラギン酸アミノトランスフェラーゼおよびアラニンアミノトランスフェラーゼ値の上昇（基準値上限の3倍以上）は、プラバスタチン群でそれぞれ26名と16名、プラセボ群で20名と12名で記録された（P非重要）。

※なぜ皮膚がんを除外しているのかは不明．含めた結果が気になる．
※「クレアチンキナーゼ濃度の上昇（基準値上限の10倍以上）を無症状に繰り返した。」これは現在，スタチンの副作用として横紋筋融解症として知られる．P値に差がつかないのは発生率が低いため?

# Discussion

プラバスタチンは、プラセボと比較して、高コレステロール血症で心筋梗塞の既往のない中年男性において、致死的または非致死的冠動脈イベントのリスクを約30％減少させることが示された。治療による有益な効果は、さまざまな冠動脈のエンドポイントにおいて驚くほど一貫していた。レジン、フィブラート、その他の3-ヒドロキシ-3-メチルグルタリル-コエンザイムA還元酵素阻害薬を用いた試験の結果とは対照的に、time-to-eventカーブは治療開始後6ヵ月以内に分岐し始め、試験中ずっと同じ割合で分岐しつづけた。冠動脈造影および血行再建術を必要とする頻度は、プラバスタチン群でプラセボ群に比べ有意に低かった。

※プライマリエンドポイントにおいて，他の薬よりも有効なことを示せた．

この試験の被験者は、社会経済的地位と危険因子の点で一般人口を代表するものであった（表1）。血漿コレステロール値は、英国人集団に見られる範囲の最高四分位値であった27。多数の被験者が軽度の血管疾患を有していたが、この試験の結果を高コレステロール血症の典型的な中年男性にも適用できるように、これらの被験者は除外されなかった。

※サンプルは興味のある母集団を代表していた．

ガイドラインに基づき28、LDLコレステロール値を試験参加基準として使用しました。プラバスタチンは、プラセボと比較して、このリポ蛋白分画を大きく減少させ（図1）、血漿トリグリセリドを適度に減少させ、さらにHDLコレステロールを増加させた。これらの変化は、プラバスタチンに期待される反応と一致しており29、いずれも臨床的有用性をもたらす可能性がある。LDLコレステロール値の変化は、以前の一次予防試験で観察されたものよりも大きい1-4。

被験者をベースライン時の脂質レベルに応じて2群に分けたところ、冠動脈リスクは血漿LDLコレステロール値とトリグリセリド値が高い（すなわち、中央値以上のレベル）こととHDLコレステロール値が低い（すなわち、中央値未満のレベル）ことに関連していた（Table 3）。血漿コレステロール値は有意な因子ではなかったが、これは主としてこの試験への参加基準として用いられたコレステロール値の範囲が狭かったためである。プラバスタチン治療によるリスクの相対的減少は、脂質値が中央値より高い被験者でも低い被験者でも統計的に有意であり、その大きさも同様であった。

プラバスタチン治療によるリスクの相対的減少は、年齢（55歳未満と55歳以上）および喫煙の有無に影響されなかった。さらに、複数の危険因子を持たないサブグループと血管系疾患の既往のないサブグループで、有意な治療効果が認められた。したがって、厳密に一次予防のカテゴリーに属すると考えられる被験者においても、プラバスタチン療法は冠動脈イベントの相対的リスクを有意に減少させたと結論づけることが可能である。

※サブグループでも差は見られない．軽い人(1次予防をしたほうがいい人)に対しても効果的だった．

プラバスタチン療法は忍容性が高く、プラセボに比して試験の中止はなかった。特に、以前の研究15と同様に、プラバスタチンが肝機能に悪影響を与えたり、ミオパチーを引き起こしたという証拠はなかった。この結果は、3-ヒドロキシ-3-メチルグルタリル-コエンザイムA還元酵素阻害薬による脂質低下と非心血管疾患による死亡リスクの増加は関連しないとした最近の二次予防試験9の結果を支持するものである。先の試験と同様に9、治療群とプラセボ群の比較では、致死的または偶発的な癌の発生率、自殺や外傷による死亡の有意な増加は認められませんでした。このクラスの薬剤の有害事象プロファイルについては、他の予防試験の結果が発表されるにつれて、より多くのデータが入手可能になると思われます。今回の試験では、プラバスタチン治療が致命的な冠動脈イベントに関して有益であり、他の原因による死亡数の増加がないことから、あらゆる原因による死亡の相対リスクが22％減少した（P = 0.051）。

※副作用はとくにない．

表2のデータから、高コレステロール血症で心筋梗塞の既往がない中年男性1000人を5年間プラバスタチンで治療すると、治療しない場合に予想されるよりも冠動脈造影が14回、血行再建術が8回、非致死的心筋梗塞が20回、心血管系の原因による死亡が7回、その他の原因による死亡が2回少なくなると推定することができる。これらの数値はintention-to-treat解析に基づいているので、完全遵守の被験者における有益性の大きさはより大きいと思われる。これらの知見は、中高年の軽症高血圧の治療に関する医学研究評議会の試験30,31の結果と比較することができる。この試験では、35歳から64歳までの1000人の男性が5年間積極的に治療を受けた結果、脳卒中が6件、心血管イベントが2件減少すると推定された。したがって、今回の結果は、プラバスタチンによるコレステロール値の低下が、高コレステロール血症の無症候性被験者における冠動脈イベントのリスクを減少させることを示している。

※$20 for 30tab らしい．(正規品の場合)
コスト 60\*365\*1000 = 2190万円　
心筋梗塞20回分  150万\*20 = 3000万円

# 批判的に

もし本スタディの結果が正しければ，「高コレステロール血症で心筋梗塞の既往がない中年男性」にスタチンを使うことは正当化されるだろう．

- 女性は？
- 日本人や他の人種は？
---
layout: layouts/post.njk
---

関数というと，1次関数とか，2次関数とか，何か数式をイメージするかもしれません．

![関数のイメージ]()

しかし，関数と数式は本質的には関係ありません．関数のいくつかの観点から捉えてみます．

## 入力に対して出力を出すブラックボックス

関数とは，ある入力xを入れると，それに対応する出力yを吐き出すブラックボックスです．

例えば，ここにfという名前の関数があります．

![fブラックボックス]()

これに，1を入れると，3を吐き出します．

![fブラックボックスに1を入れると3を出す]()

同様に他のいろいろな値を入れてみると，対応した値を吐き出します．

![fブラックボックスに色々な値を入れる]()

重要なのは，決まった入力に対しては，それに対応する出力を必ず吐き出すことです．だから，1を入れて3を出す関数fに，1を入れればいつも必ず例外なく3を出します．1を入れたのに今日は2を出す日だった，とかいうことは絶対にありません．

![fブラックボックスに1を入れると必ず3を出す]()

入力と出力の個数は関数ごとに決まっていますが，1つでなくても構いません．fの入力は1つですが，例えば関数gは入力がxとyの2つで，出力がzの1つかもしれません．

![gブラックボックスに2つの値を入れると1つの値が出てくる]()

もしくは関数hは入力はx,yの2つで，出力がz,wの2つかもしれません．

![hブラックボックスに2つの値を入れると2つの値が出てくる]()

一般的には入力も出力もいくつであってもよいですが，関数ごとに決まっているので，入力が1つの関数に2つの入力は入れれませんし，出力が2つの関数が今日はたまたま1つ出力しか出力しない，ということも絶対にありえません．

![対応するものしか入れられないし出てこない]()

さらに，入れるのは数字である必要もありません．例えば関数iは文字列を1つ受け取って，その文字列を繰り返したものを出力しますし，関数jは1人の人を受け取って，その人の体重を実数yで出力します．

![関数i,j]()

jは実体としては体重計ですが，これについて「体重計は同じ人が載っても，日によって違う体重が出力される．これは関数が同じ入力には同じ出力をするということと矛盾しないか」という意見が出そうです．実は関数jの入力は正確には「ある時刻における1人の人」とすべきなのです．この場合，別の日(もっと言えば別の時刻)であれば，同じ人でも別の入力になるので，別の値を出力することはおかしなことではありません．

各関数には入力と出力の個数だけではなく，入力と出力の種類も定められています．例えば関数fは1つの実数xを入力として入れると，1つの実数yを出力として返すものですので，ここに文字を入れたり，人を入れたりすることはできません．

![]()

また，種類だけでなく範囲も正しい必要があります．例えば関数
このように入力できる種類と個数と範囲を合わせて定義域といい，出力される種類と個数と範囲を合わせて値域といいます．

## 集合と集合の対応として

集合とはもの(要素ともいいます)の集まりです．例えば自然数を集めたものをNとしましょう．

![自然数の集合N]()

このNを2つ用意して，左のN1の要素から右のN2の要素に矢印を結んでみます．約束として矢印は分岐してはいけません．

![自然数の集合NからNへの写像]()

この矢印の集まりが関数です．この矢印の情報さえあれば，ブラックボックスを作れることを示しましょう．

例えば入力の種類と個数は自然数1つです．だから，自然数が2つ入力されたり，無理数が入力されたときは何もしません．

自然数1つが入力されても，5については，結ぶ矢印がないので，これも何もできません．逆に矢印の始点になっている，例えば2が入力されれば，矢印先の7を返してやれば良いです．以上から矢印の始点となっている要素(の集合)が関数の定義域，矢印の終点となっている要素の(の集合)が関数の値域であることが分かります．

逆にブラックボックスから集合通しの矢印関係を作れることを示しましょう．

例えば，文字列を繰り返す関数iについて．


## 数式として

これまでの話は，もっとも一般的な，本質的な関数の捉え方です．

有限集合ならともかく，無限集合なら一意に関数を定義することは難しくなる．
そこで数式が対応のアルゴリズムとして働いてくれて恣意性がなくなる．ただ，そのアルゴリズムは数式で表す必要もない．
例えば，文字列2倍はプログラムとして書けるし，体重計として物理的に実装することもできる．
本質的なのは決まったものには決まったものを返す，ということ．

## グラフを書きたいときにはどうするか



## 関数のパラメータについて

一般的には媒介変数　パラメータはCSでは別の意味をとって曖昧さがあるが．．．
https://ja.wikipedia.org/wiki/%E5%AA%92%E4%BB%8B%E5%A4%89%E6%95%B0?useskin=vector

y= x+2
y = -3.1x +√3
などなどすべて1次関数

1次関数とは
y=ax + b

a,bがパラメータ

a,bを決めると関数が一つに決まる．パラメータで抽象化して同じ構造なら同じ種類の関数(族)と言える．
パラメータによって関数の形がどう変わるかという問題に興味を持つことも多い．1次関数なら傾きと切片だし，2次間数なら，これを標準形に整理して，別のパラメータに置き換えると，頂点と幅となる．

## 関数でないものの例　なぜ関数でないのかを指摘する　どうすれば関数になるか

集合対応枝分かれ
サザエさんのじゃんけんの結果で内部で分岐　

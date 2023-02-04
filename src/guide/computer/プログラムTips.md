

## ファイル
情報をどう整理するか．
プログラムを書いたときに，それをファイルとして保存する．
全てはファイルである．

いろいろな種類のファイルは拡張子で区別する．(On some platforms the format is indicated by its filename extension, specifying the rules for how the bytes must be organized and interpreted meaningfully.)
同じ拡張子でもエンコード規約が違うとだめ(文字化け UTF-8 ascii)．それぞれの長所がある．

ファイルにはテキストファイルとバイナリファイルがある．
バイナリファイルとは特定の文字コードに対応しない01列のもの．
バイナリファイルのなかにexecutable file(実行可能ファイル) = 単にバイナリ 機械語の集まりで直接CPUで実行できる https://en.wikipedia.org/w/index.php?title=Executable
テキストファイルで書いたコンピュータプログラムをバイナリにすることをコンパイルという．そのプログラムがコンパイラー．
どうやってコンパイルするのか？アセンブリ言語からバイナリにしたときと本質的には一緒だが，もっと複雑．
ファイルが横並びだと分かりづらいのでフォルダをつくって階層構造を作る．(mkdir ls mv)
ファイルに対するオペレーションはOSが提供する．(全てがファイルなら当然)

バイナリを複数実行したいことがよくある．音楽を聴きながらSNSを使うことができている
一つのCPUであってもOSの工夫によってこれは可能．プロセス．仮想メモリ，プログラムが直接指定しない．指定するデメリット，めんどくさい(そんな事興味ない)，かぶる．現代は複数CPUがある．マルチプロセッサ．クロック周波数はCPUが1秒間に何回処理できるかを示す．
永続的に保存するためにハードディスクがある．

## ストリーム
入出力装置とドライバ．
カーネル(ユーザーモード，カーネルモード)
シェル
https://learn.microsoft.com/ja-jp/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode

sudo https://ja.wikipedia.org/wiki/Sudo
https://en.wikipedia.org/wiki/Kernel_(operating_system)
https://en.wikipedia.org/wiki/Shell_(computing)

CLIのコンピュータをイメージ，そのためのshell
そこからGUIに拡張して対応を考える．
https://en.wikipedia.org/wiki/Command-line_interface



バイナリとそれ以外 






## GPU


## 


Information in a computer file can consist of smaller packets of information (often called "records" or "lines") that are individually different but share some common traits. For example, a payroll file might contain information concerning all the employees in a company and their payroll details; each record in the payroll file concerns just one employee, and all the records have the common trait of being related to payroll—this is very similar to placing all payroll information into a specific filing cabinet in an office that does not have a computer. 
そこでなぜデータベースが必要なのか
https://www.neclearning.jp/sample_text/DB651-1.pdf




日本語で無料で公開中の資料

レベル1 
[python colab](https://colab.research.google.com/github/utokyo-ipp/utokyo-ipp.github.io/blob/master/colab/index.ipynb)
レベル2 [cs50の日本語版](https://cs50.jp/)





## ポインタ 値渡し 参照渡し



## インターフェース


## ポリモーフィズム

<!-- 情報科学一般 -->
データベースも
singele source of truth

<!-- OOP -->

## SOLIDの原則


## クラス プリミティブ

<!-- 関数型 -->
## 副作用をなくす

## 再帰

<!-- 良いコード -->
## 分割

## abstraction

## コメント

## テスト(上からはじめる)
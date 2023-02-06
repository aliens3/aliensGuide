# 覚書
- spaced learning
- MVP


## 注意

npm run scripts で　&はparallel &&はsequentialに実行．pararellだと，tailwindcssの実行が_siteができないうちから行われてcssが生成されない，かつ，eleventyの機能自体もバグるので，必ず&&で実行すること．最初は&にしてうまくいっていた理由は良くわからない．

## reveal.jsの埋め込み
libフォルダにjsファイル，reveal-imgsフォルダにスライドを作るための画像がある．slides.comから作るときにはパスを変更して以下のようなiframeで埋め込む．幅などは要調整．

<iframe src="/guide/reveal/素朴な方法/" title="description" width="100%" height="400px"></iframe>

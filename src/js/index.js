
/* ch0から読もうのイラスト*/

const TOC_Unit0={
    "Un0|モチベーションとメタ的なこと|/c0": {
        "Ch0|我々ホモ・サピエンスの生存・快楽のために世界を支配しよう" : {
            "Se1|こんにちは" : {
                "SS1.1|妥当な論証はトートロジーであり，矛盾からもトートロジーを導けること(背理法妥当な論証はトートロジーであり，矛盾からもトートロジーを導けること(背理法" : {},
                "SS1.2|こんにちは" : {},
            },
            "Se2|おはよう" : {
                "SS2.1|こんにちは" : {},
                "SS2.2|こんにちは" : {},
            },
        }
        ,
        "Tips|理解の方法|/u0/tips" : {
            "Se1|こんにちは" : {
                "SS1.1|こんにちは" : {},
                "SS1.1|こんにちは" : {},
                "SS1.2|こんにちは" : {},
            },
        },
        "About|なぜ/なにを/どのように/誰が 書いたか|/u0/about" :{},
        "Links| |/u0/links" :{}
    }
}
const TOC_Unit1={
    "Un1|論理は思考の解剖である|/u1-intro": {
        "Introduction| |/u1-intro" :{},
        "Ch1|健全なる論証が世界について正しい知識を導くこと" : {
            "Se1|こんにちは" : {
                "SS1.1|妥当な論証はトートロジーであり，矛盾からもトートロジーを導けること(背理法妥当な論証はトートロジーであり，矛盾からもトートロジーを導けること(背理法" : {}
            },
            "Se2|おはよう" : {
            },
        }
        ,
        "Ch2|すべての妥当な論証は4つの真理値表がわかれば構成できること" : {
            "Se1|こんにちは|name10" : {}
        },
        "Ch3|妥当な論証はトートロジーであり，矛盾からもトートロジーを導けること(背理法)" :{},
        "Ch4|仮説演繹法により目的付けられた観測・実験が行なえ，正しい認識に至れること" :{},
        "Ch5|仮説形成の方法　代表例として帰納法・アナロジー" :{},
        "Ch6|述語論理: 命題の内部構造に立ち入ることで「すべて」「ある」が正しく扱えること 数学の基礎" :{},
        "Ch7|様相論理: 可能世界と人間原理" :{},
        "Q&A| |u1-qa" :{},
        "まとめ| |u1-summary" :{},
    }
}


function isEmpty2(obj){
    return !Object.keys(obj).length;
}

function info_from_key(key) {
    const _list = key.split("|");
    const Type= _list[0]
    let HEAD;
    let title_type;
    let tag;
    let style;
    let link=""
    switch (Type.substring(0,2)) {
        case "Un":
            title_type = "u-title"
            HEAD = "Unit" + Type.substring(2)
            tag ="open"
            style="margin-bottom:0.6rem; margin-top:0.6rem"
            link = "/unit"+ Type.substring(2) + "-intro"
          break;
        case "Ch":
            title_type = "c-title"
            HEAD = "Chapter" + Type.substring(2)
            tag =""
            style=""
            link = "/chapter"+ Type.substring(2)
            if(screen.width < 700){
                HEAD = "Ch." + Type.substring(2)
            }
          break;
        case "Se":
            title_type = "s-title"
            HEAD = "<span>&#167</span>" + Type.substring(2)
            tag =""
            style=""
          break;
        case "SS":
            title_type = "s-title"
            HEAD = "<span>&#167</span>" + Type.substring(2)
            tag =""
            style=""
          break;
        default:
            title_type = "c-title"
            HEAD = _list[0]
            tag =""
            style=""
      }
    const Title =  _list[1]
    if(_list.length > 2){
        link = _list[2]
    }
    return {
        "HEAD" : HEAD,  
        "Title" : Title,
        "title_type" :title_type,
        "tag" : tag,
        "style" : style,
        "link" : link
    }
}



function hogehoge(obj,depth,parent_key){
    let html;
    let props_html;
    if(isEmpty2(obj)){
        const info = info_from_key(parent_key)
        let style="";
        if(info["title_type"] !== "s-title"){
            if(screen.width < 1024){
                style = ` padding-left:1.2rem;`
            }else{
                style = ` padding-left:2rem;`
            }
            
        }
        if(info["link"]){
            title_text=` <div style="display: flex; align-items : flex-start; gap:10px;">
            <div>${info["HEAD"]}</div>
            <a href="${info["link"]}">
                <div class="${info["title_type"]}">
                ${info["Title"]}
                </div>
            </a>
            </div>
            
            `
         }else{
            title_text=` <div style="display: flex; align-items : flex-start; gap:10px;">
            <div>${info["HEAD"]}</div>
            <div class="${info["title_type"]}">
            ${info["Title"]}
            </div>
            </div>
            `
         }

        html = `<div class="tree-nav__item">
            <h${depth+1} style="${style}">
            ${title_text}
            </h${depth+1}>
                </div>`;
        
        
        
        
        return html
    }
    else{
        props_html =""
        for (const key in obj) {
            const prop_html=hogehoge(obj[key],depth+1,key);
            props_html+=prop_html;
        }
        if (!parent_key){
            return props_html;
        }else{
            const info = info_from_key(parent_key)
            let title_text
            if(info["link"]){
               title_text=` <a href="${info["link"]}">${info["Title"]}</a>`
            }else{
                title_text=` ${info["Title"]}`
            }
            html =`
            <details ${info["tag"]} class="tree-nav__item is-expandable">
                    <summary class="tree-nav__item-title my-1" style="${info["style"]}">
                        <h${depth+1} style="display: flex; align-items : flex-start; gap:10px; min-width: 0;">
                        <div>${info["HEAD"]}</div>
                        <div class="${info["title_type"]}">${title_text}</div>
                        </h${depth+1}>
                    </summary>
                    ${props_html}
            </details>
            `
            return html;
        }
    }
}

const TOC0 = hogehoge(TOC_Unit0,0,false);
const TOC1 = hogehoge(TOC_Unit1,0,false);


document.getElementById('nav1').innerHTML += TOC0;
document.getElementById('nav1').innerHTML += TOC1;

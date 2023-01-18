

//1028px未満の場合はスマホ用の表示にするためにdisabledを外し，閉じて全体が俯瞰できるようにする
function details_for_smartphone(){
     if(screen.width < 1028){
          const details_list = document.querySelectorAll("details")
          details_list.forEach(
               element => {
                    element.toggleAttribute("disabled")
                    element.toggleAttribute("open")
               }
          )
     }
}

//details_for_smartphone()
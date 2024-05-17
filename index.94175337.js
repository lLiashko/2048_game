const t=new class{constructor(t=null){this.size=4,this.score=0,this.status="idle",this.initialState=t,this.board=t?this.copyState(t):this.generateEmptyBoard()}generateEmptyBoard(){return Array(this.size).fill(null).map(()=>Array(this.size).fill(0))}getState(){return this.board}getScore(){return this.score}getStatus(){return this.status}initializeGame(){this.addRandomTile(),this.addRandomTile()}addRandomTile(){let t=[];for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++)0===this.board[e][s]&&t.push([e,s]);if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.board[e][s]=.9>Math.random()?2:4}}slide(t){let e=t.filter(t=>t);for(;e.length<this.size;)e.push(0);return e}combine(t){for(let e=0;e<t.length-1;e++)t[e]===t[e+1]&&0!==t[e]&&(t[e]*=2,t[e+1]=0,this.score+=t[e]);return t}moveLeft(){if("playing"!==this.status)return;let t=!1;for(let e=0;e<this.size;e++){let s=this.slide(this.board[e]);s=this.combine(s),s=this.slide(s),this.board[e].toString()!==s.toString()&&(t=!0),this.board[e]=s}t&&this.postMove()}moveRight(){if("playing"!==this.status)return;let t=!1;for(let e=0;e<this.size;e++){let s=[...this.board[e]],i=this.slide(this.board[e].slice().reverse());i=this.combine(i),i=this.slide(i).reverse(),s.toString()!==i.toString()&&(t=!0),this.board[e]=i}t&&this.postMove()}moveUp(){if("playing"!==this.status)return;let t=!1;for(let e=0;e<this.size;e++){let s=this.board.map(t=>t[e]),i=this.slide(s);i=this.combine(i),i=this.slide(i),s.toString()!==i.toString()&&(t=!0);for(let t=0;t<this.size;t++)this.board[t][e]=i[t]}t&&this.postMove()}moveDown(){if("playing"!==this.status)return;let t=!1;for(let e=0;e<this.size;e++){let s=this.board.map(t=>t[e]),i=this.slide(s.slice().reverse());i=this.combine(i),i=this.slide(i).reverse(),s.toString()!==i.toString()&&(t=!0);for(let t=0;t<this.size;t++)this.board[t][e]=i[t]}t&&this.postMove()}postMove(){this.addRandomTile(),this.checkGameStatus()}checkGameStatus(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)if(2048===this.board[t][e]){this.status="win";return}for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)if(0===this.board[t][e]||e!==this.size-1&&this.board[t][e]===this.board[t][e+1]||t!==this.size-1&&this.board[t][e]===this.board[t+1][e])return;this.status="lose"}start(){"idle"===this.status&&(this.initializeGame(),this.status="playing")}restart(){this.board=this.initialState?this.copyState(this.initialState):this.generateEmptyBoard(),this.score=0,this.status="idle"}copyState(t){return t.map(t=>[...t])}};document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".button.start"),s=document.querySelector(".game-field"),i=document.querySelector(".game-score"),r=document.querySelector(".message-start"),a=document.querySelector(".message-win"),o=document.querySelector(".message-lose"),l=()=>{i.textContent=t.getScore();let e=t.getState();s.querySelectorAll(".field-row").forEach((t,s)=>{t.querySelectorAll(".field-cell").forEach((t,i)=>{t.className="field-cell",0!==e[s][i]?(t.classList.add(`field-cell--${e[s][i]}`),t.textContent=e[s][i]):t.textContent=""})}),"win"===t.getStatus()?a.classList.remove("hidden"):"lose"===t.getStatus()?o.classList.remove("hidden"):(a.classList.add("hidden"),o.classList.add("hidden"))},h=()=>{t.start(),r.classList.add("hidden"),e.textContent="Restart",e.classList.remove("start"),e.classList.add("restart"),l()},n=()=>{t.restart(),r.classList.remove("hidden"),e.textContent="Start",e.classList.remove("restart"),e.classList.add("start"),l()};e.addEventListener("click",()=>{let t=e.textContent;"Start"===t?h():"Restart"===t&&n()}),document.addEventListener("keydown",e=>{if("playing"===t.getStatus()){switch(e.key){case"ArrowLeft":t.moveLeft();break;case"ArrowRight":t.moveRight();break;case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown()}l()}}),l()});
//# sourceMappingURL=index.94175337.js.map
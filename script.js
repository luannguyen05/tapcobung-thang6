const $=document.querySelector.bind(document),$$=document.querySelector.bind(document),calenderEl=$("#calender"),status={finished:"#2ecc71",currentTask:"#2980b9"},now=new Date,exercises={SIT_UP:15,LEG_RAISE:6,PLANK:10},calenderHtmlExp=(e,n,d,l)=>`\n      <li >\n        <label data-completed="false" for="day-${e}">\n          <span class="day">${e}</span>\n          <div>\n            <input type="checkbox" id="day-${e}" hidden />\n            <div class="tasks">\n              <p>gập bụng: ${n} cái</p>\n              <p>nâng chân: ${d} cái</p>\n              <p>plank: ${l}s</p>\n            </div>\n          </div>\n        </label>\n      </li>\n      `,renderCalender=()=>{for(let r=1;r<=30;r++)calenderEl.innerHTML+=(e=r,n=exercises.SIT_UP,d=exercises.LEG_RAISE,l=exercises.PLANK,`\n      <li >\n        <label data-completed="false" for="day-${e}">\n          <span class="day">${e}</span>\n          <div>\n            <input type="checkbox" id="day-${e}" hidden />\n            <div class="tasks">\n              <p>gập bụng: ${n} cái</p>\n              <p>nâng chân: ${d} cái</p>\n              <p>plank: ${l}s</p>\n            </div>\n          </div>\n        </label>\n      </li>\n      `),exercises.SIT_UP+=5,exercises.LEG_RAISE+=2,exercises.PLANK+=5;var e,n,d,l},handleEvent=()=>{Array.from(document.querySelectorAll("li")).map((e=>{now.getDate()==e.children[0].children[0].textContent&&(e.style.background="#3498db",e.style.color="#fff",e.children[0].style.boxShadow="0.125rem 0.125rem 0.75rem #fff",e.children[0].dataset.completed=!0)}))};window.addEventListener("load",(()=>{renderCalender(),Array.from(document.querySelectorAll("li")).map((e=>{now.getDate()==e.children[0].children[0].textContent&&(e.style.background="#3498db",e.style.color="#fff",e.children[0].style.boxShadow="0.125rem 0.125rem 0.75rem #fff",e.children[0].dataset.completed=!0)}))}));
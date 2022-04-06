
let myLeads=[]
let index=0
let inputEl=document.getElementById("input-el")
const renderLead=document.getElementById("leads")
let leadsfromlocalStorage= JSON.parse(localStorage.getItem("myLeads"))
const deletebtn=document.getElementById("delete-all")

const tabBtn=document.getElementById("save-tab")
// Checking if localStorage is empty or not 
if(leadsfromlocalStorage)
{
    myLeads=leadsfromlocalStorage
    renderLeads(myLeads)
}
//For Save Button
const inputBtn=document.getElementById("input-btn")
inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value)
    inputEl.value="" 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
}
)
//For Delete All Button
deletebtn.addEventListener("click",function()
{
    localStorage.clear()
    myLeads=[]
    //renderLeads(myLeads)
    document.location.reload()
})

// EventListener for tabBtn
tabBtn.addEventListener("click",function()
{
    // Chrome Get Tab API
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})
function renderLeads(leads){
    let listItems=""
    for(let i=index;i<leads.length;i++)
        {
            
            //listItems+="<li><a href='"+ myLeads[i] +"' target='_blank'>"+myLeads[i]+"</a></li>"
                listItems+=`<li>
                    <a href='${leads[i]}' target='_blank'>
                        ${leads[i]}
                    </a>
                    </li>`
        }
    renderLead.innerHTML += listItems
    index++
}
 

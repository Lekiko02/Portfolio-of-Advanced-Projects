import { Octokit } from "https://esm.sh/@octokit/core";
import { refresh } from "./refreshButton.js";
export let language;
const octokit = new Octokit({
    auth: '' // put your token here for the code to work
  })

export function selectLanguages(){
    const API_URL = "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"

    fetch(API_URL) //This sends a GET request to the provided URL.
    .then(response => response.json()) //converts the response to JSON
    .then(data => {
        let options = `<option value="" class="js-option" disabled selected>Select</option>`;
        data.slice(1).forEach((languageData) => {
            // console.log(language.title);// Logs the data to the console (e.g., language titles and values)
            
            
                options += ` 
                            <option value="${languageData.value}" class="js-option">${languageData.title}</option>
                            `
                

        
        });

        document.querySelector(".js-select").innerHTML= options;

        document.querySelector(".js-select").addEventListener("change",(languages) =>{
                // console.log(languages.target.value)
                language = languages.target.value;
                
                seachRepo(language);
                
            })



    })
    .catch(error => console.error('Error fetching data:', error));// Handles any errors


}

selectLanguages()


export async function seachRepo(language){
    const container = document.querySelector(".js-container");

    // Set up a loading message
    let loadingMessage = "Loading";
    const loadingInterval = setInterval(() => {
    loadingMessage += ".";
    container.innerHTML = `<div class="loading-message">${loadingMessage}</div>`;
    container.style.background = "grey"
    }, 500); // Update every 500ms   

    try{
        const response = await octokit.request('GET /search/repositories', {
            headers: {
            'X-GitHub-Api-Version': '2022-11-28'
            }, 
                q:`language:${language}`,
                sort:"stars",
                order:"desc",
                per_page: 100
            
        })

        clearInterval(loadingInterval);
        const repositories = response.data.items;

        const randomRepo = repositories[Math.floor(Math.random()* repositories.length)];
            

        const containers = ` <div class="name">
                                ${randomRepo.name}
                        </div>

                        <div class="repo">
                            ${randomRepo.description}
                        </div>

                        <div class="footer">
                            <div><img src="images/stars.png" alt="" style="height: 13px;"> ${randomRepo.language}</div>
                            <div><img src="images/circle.jpeg" alt="" style="height: 13px;"> ${randomRepo.stargazers_count}</div>
                            <div><img src="images/fork.jpg" alt="" style="height: 13px;"> ${randomRepo.forks_count}</div>
                            <div><img src="images/open-issue.png" alt="" style="height: 14px;"> ${randomRepo.open_issues}</div>
                        </div>`

        container.innerHTML = containers;
        container.style.background = "white";

        const retry = document.querySelector(".js-refresh");
        retry.style.background = "black";
    }catch (error) {
        clearInterval(loadingInterval);
        console.error("Error fetching repositories:", error);
        container.innerHTML = `<div class="error-message">Failed to load data. Please try again later.</div>`;
        container.style.background = "red"

        const retry = document.querySelector(".js-refresh");
        retry.style.background = "red";
      }
    

}

refresh()
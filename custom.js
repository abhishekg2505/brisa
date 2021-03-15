

async function getUsers(urllink1) {
    let url = urllink1;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers(urllink) {
    let users = await getUsers(urllink);

    let html = '';
    users.map(user => {
        let htmlSegment = `<div class="col3 missionList">
                            <div class="width100">
                            <div class="imgdiv">
                            <img src="${user.links.mission_patch}" class="img-fluid">
                            </div>
                            <h5>${user.mission_name + '#'+ user.flight_number}</h5>
                            <p><strong>Mission Ids:</strong></p>
                            <p class="missionid">${user.mission_id}</p>
                            <p><strong>Launch Year:</strong> <span class="blue">${user.launch_year}</span></p>
                            <p><strong>Successful Launch:</strong> <span class="blue">${user.launch_success}</span></p>
                            <p><strong>Successful Landing:</strong> <span class="blue">${user.rocket.first_stage.cores[0].land_success}</span></p>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#container');
    container.innerHTML = '';
    container.innerHTML = html;
}

renderUsers('https://api.spacexdata.com/v3/launches?limit=100');
function forall(urldata){
    renderUsers(urldata);
}



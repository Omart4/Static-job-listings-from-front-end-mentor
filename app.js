const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
]
const body = document.body;
const main = document.querySelector('.main')

const createBars = ()=>{
    data.forEach(i=>{
        const bar = document.createElement('div');
        bar.className = 'bar';

        //Left div
        const left = document.createElement('div');
        left.className = 'left';

        //Logo div
        const logo = document.createElement('div');
        logo.className = 'logo'
        const image = document.createElement('img');
        image.setAttribute('src',`${i.logo}`)
        image.setAttribute('alt',`${i.company}`)
        logo.appendChild(image)
        left.appendChild(logo)

        //Details div
        const details = document.createElement('div')
        details.classList = 'details'

        //name-tags Div
        const nameTags = document.createElement('p')
        nameTags.className = 'name-tags'
        const company = document.createElement('span');
        company.className = 'company'
        company.textContent = `${i.company}`
        const New = document.createElement('span')
        New.className = 'NEW'
        New.textContent = 'NEW!'
        New.style.display = 'none';
        if(i.new){
            New.style.display = 'block'
        } 
        const Feat = document.createElement('span');
        Feat.className = 'FEAT'
        Feat.innerText = 'FEATURED'
        Feat.style.display = 'none'
        if(i.featured){
            Feat.style.display = 'block'
        }
        nameTags.appendChild(company)
        nameTags.appendChild(New)
        nameTags.appendChild(Feat)
        details.appendChild(nameTags)

        //Title div
        const title = document.createElement('p')
        title.className = 'Title'
        title.textContent = `${i.position}`
        details.appendChild(title)

        //Time div
        const time = document.createElement('span');
        time.className = 'time'

        const date = document.createElement('span')
        date.className = 'date'
        date.textContent = `${i.postedAt}`

        const type = document.createElement('span')
        type.className = 'type'
        type.textContent = `${i.contract}`

        const location = document.createElement('span');
        location.className = 'location'
        location.textContent = `${i.location}`
        time.appendChild(date)
        time.appendChild(type)
        time.appendChild(location)
        details.appendChild(time)
        left.appendChild(details)
        bar.appendChild(left)

        //Right div
        const right = document.createElement('div');
        right.className = 'right';

        //Span for role
        const role = document.createElement('span')
        role.className = 'tech'
        role.innerText = `${i.role}`
        right.appendChild(role)

        //Span for level
        const level = document.createElement('span')
        level.className = 'tech'
        level.textContent = `${i.level}`
        right.appendChild(level)

        //Spans for tech
        for(let j=0;j<i.languages.length;j++){
            const language = document.createElement('span');
            language.className = 'tech'
            language.textContent = `${i.languages[j]}`
            right.appendChild(language)
        }

        //Spans for tools
        for(let j=0;j<i.tools.length;j++){
            const tool = document.createElement('span')
            tool.className = 'tech'
            tool.textContent = `${i.tools[j]}`
            right.appendChild(tool)
        }
        bar.appendChild(right)
        main.appendChild(bar) 
    })
}
createBars()  

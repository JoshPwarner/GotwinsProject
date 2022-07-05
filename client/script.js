const submitBtn = document.getElementById('submit-btn');


// function getTheTime() {
//     const event1 = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     let first = event1.toLocaleDateString('en-gb', options)
//     const getHours = event1.getHours();
//     const getMinutes = event1.getMinutes();
//     const colon = ':'
//     const morning = 'am';
//     const afternoon = 'pm';
//     if (getMinutes < 10) {
//         if (getHours < 12 && getHours < 10) {
//             const finalTime = first + ' ' + '0' + getHours + colon + '0' + getMinutes;
//             return console.log(finalTime + morning);
            
//         } else if (getHours < 12) {
//             const finalTime = first + ' ' + getHours + colon + '0' + getMinutes;
//             return console.log(finalTime + morning);
//         } else {
//             const finalTime = first + ' ' + getHours + colon + '0' + getMinutes;
//             return console.log(finalTime + afternoon);
//         }
//     } else {
//         if (getHours < 12 && getHours < 10) {
//             const finalTime = first + ' ' + '0' + getHours + colon + getMinutes;
//             return console.log(finalTime + morning);   
//         } else if (getHours < 12) {
//             const finalTime = first + ' ' + getHours + colon + getMinutes;
//             return console.log(finalTime + morning);

//         } else {
//             const finalTime = first + ' ' + getHours + colon + getMinutes;
//             return console.log(finalTime + afternoon);

//         }

//     }

// }

// getTheTime();

const now = new Date();
const options = {
   hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', 
      year: 'numeric',
};

console.log(new Intl.DateTimeFormat('en-GB', options).format(now));


submitBtn.addEventListener('click', async (e) => {
    querySelectorAll(':scope > div')
    e.preventDefault();
    const categoryData = document.getElementById('category-input').value;  
    const storyData = document.getElementById('story-input').value;
    fetch('url')
    .then(response => response.text())
    .then(data => JSON.parse(data))

    let newObject = {
        postID: 1, // 1
        category: categoryData, // career
        story: storyData, // I'm a genius
        comments: [], 
        reactions: {fire: 0,
                    thumbs: 0,
                     smiley: 0},
        gifs: '',
    }
    await fetch('http://localhost:5000/api/posts/career', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then(response => console.log(response));
})
    
    
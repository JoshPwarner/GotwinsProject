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
    
    e.preventDefault();
    const categoryData = document.getElementById('category-input').value;  
    const storyData = document.getElementById('story-input').value;
    let postIDnumber = 0;
    await fetch('http://localhost:5000/api/posts/relationships')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(array => array.posts)
    .then(array => {
        postIDnumber = array.length + 1;
    })

    let newObject = {
        postID: postIDnumber, // 1
        category: categoryData, // career
        story: storyData, // I'm a genius
        comments: [], 
        reactions: {fire: 0,
                    thumbs: 0,
                     smiley: 0},
        gifs: '',
    }
    await fetch('http://localhost:5000/api/posts/relationships', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    
})
    
    
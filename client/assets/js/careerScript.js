const submitBtnCareer = document.getElementById('submit-button-careers');

function getTime() {
    const now = new Date();
    const options1 = {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long', 
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('en-GB', options1).format(now);
}


// let container = document.createElement('div');
            // container.style.display = "flex";
            // container.style.flexDirection = 'column';
            // container.style.border = "1px solid black";
            // let titleBox = document.createElement('div');
            // titleBox.textContent = each.title;
            // let storyBox = document.createElement('div');
            // storyBox.textContent = each.story;
            // container.appendChild(titleBox);
            // container.appendChild(storyBox);
            // let postBox = document.getElementById('posts');
            // postBox.insertAdjacentElement('afterbegin', container);



function fetchPosts() {
    fetch('http://localhost:5000/api/posts/career')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(result => {
        result.posts.forEach(item => {
                    let timeBox = item.time;
                    let postIdBox = item.postID;
                    let categoryBox = item.category;
                    let storyBox = item.story;
                    let commentsBox = item.comments;
                    let reactionsBox = item.reactions;
                    let gifsBox = item.gifs;
                    console.log(storyBox);
                    let newDiv = document.createElement('div');
                    let overallPost = `<section class="post">
                    <div class="date">
                        <div class="avatar">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <p class="date-text">${timeBox}</p>
                    </div>
                    <div class="post-content">
                        <p>${storyBox}</p>
                    </div>
                    <hr class="divider" />
                    <div class="emoji">
                        <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                    </div>
                    <div class="add-comment">
                        <div class="form-box">
                            <div class="avatar">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <form class="new-post-form">
                                <textarea
                                    name="new-post"
                                    id="new-post-career"
                                    cols="30"
                                    rows="2"
                                    placeholder="Add a comment..."
                                    required
                                ></textarea>
                                <div class="buttons">
                                    <button id="submit-btn-${postIdBox} "class="button submit" type="submit">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="comments">
                        <div class="comment-container">
                            
                        </div>
                    </div>
                </section>`
                newDiv.innerHTML = overallPost;
                newDiv.style.margin = '2rem 0 2rem 0';
                document.getElementById('posts-container-career').insertAdjacentElement('afterbegin', newDiv);
                })
                document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                    e.preventDefault();
                    fetch('url')
                })
            })
        
             
        }
    
    
    // .then(items => {
    //     items.forEach(each => {
    //         let timeBox = each.time;
    //         let postIdBox = each.postID;
    //         let categoryBox = each.category;
    //         let storyBox = each.story;
    //         let commentsBox = each.comments;
    //         let reactionsBox = each.reactions;
    //         let gifsBox = each.gifs;

    //         console.log(storyBox);
    //     //     let overallPost = `<section class="post">
    //     //     <div class="date">
    //     //         <div class="avatar">
    //     //             <i class="fa-solid fa-user"></i>
    //     //         </div>
    //     //         <p class="date-text">${timeBox}</p>
    //     //     </div>
    //     //     <div class="post-content">
    //     //         <p>${storyBox}</p>
    //     //     </div>
    //     //     <hr class="divider" />
    //     //     <div class="emoji">
    //     //         <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
    //     //     </div>
    //     //     <div class="add-comment">
    //     //         <div class="form-box">
    //     //             <div class="avatar">
    //     //                 <i class="fa-solid fa-user"></i>
    //     //             </div>
    //     //             <form class="new-post-form">
    //     //                 <textarea
    //     //                     name="new-post"
    //     //                     id="new-post-career"
    //     //                     cols="30"
    //     //                     rows="2"
    //     //                     placeholder="Add a comment..."
    //     //                     required
    //     //                 ></textarea>
    //     //                 <div class="buttons">
    //     //                     <button class="button submit" type="submit">Post</button>
    //     //                 </div>
    //     //             </form>
    //     //         </div>
    //     //     </div>
    //     //     <div class="comments">
    //     //         <div class="comment-container">
    //     //             <div class="avatar">
    //     //                 <i class="fa-solid fa-user"></i>
    //     //             </div>
    //     //             <p class="comment-text">Congratulations!</p>
    //     //         </div>
    //     //     </div>
    //     // </section>`
    //     // document.getElementById('posts-container-career').insertAdjacentElement('afterbegin', overallPost);
    //     })
    // })



fetchPosts();

submitBtnCareer.addEventListener('click', async (e) => {
    e.preventDefault();  
    const storyData = document.getElementById('new-post-career').value;
    console.log(storyData);
    let postIDnumber = 0;
    await fetch('http://localhost:5000/api/posts/career')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(array => array.posts)
    .then(array => {
        postIDnumber = array.length + 1;
    })

    let newObject = {
        time: getTime(),
        postID: postIDnumber, 
        category: 'career', 
        story: storyData, 
        comments: [], 
        reactions: {fire: 0,
                    thumbs: 0,
                     smiley: 0},
        gifs: '',
    }

    console.log(newObject);
    await fetch('http://localhost:5000/api/posts/career', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })


})
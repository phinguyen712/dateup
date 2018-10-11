export default {
  getUsersProfiles: () => [
    {
      id: 123,
      userName: 'Josh',
      age: 23,
      distance: 4,
      profession: 'Product Designer at Pixie Dust Labs',
      education: 'University of New Hampshire',
      height: '6.4',
      hometown: 'San Mateo, Ca',
      questionsnnaire: [
        {
          question: 'WHAT MAKES ME HAPPY',
          answer: 'Any and all concerts, getting outdoors, a really good book.',
        },
        {
          question: 'HOW DO YOU DESCRIBE YOURSELF',
          answer: 'I’m definitley fun and outgoing! I like to be outside all the time.',
        },
      ],
      pictures: [
        'https://i.pinimg.com/originals/35/cb/04/35cb04b7ef0e9b0fe46096f22224aff2.jpg',
        'https://www.aibolit.us/wp-content/uploads/2018/05/handsome-black-men-pictures-pin-channoah-higgens-on-the-finest-black-men-ever-lord-have-720-x-719-pixels.png',
        'https://i.pinimg.com/originals/8c/36/e4/8c36e4fe91cb58316ab80143d8d26634.jpg',
      ],
    },
    {
      id: 1234,
      userName: 'Ted',
      age: 30,
      distance: 12,
      profession: 'Personal Trainer at Gods gym',
      education: 'U of Penn',
      height: '6.2',
      hometown: 'San Diego, Ca',
      questionsnnaire: [
        {
          question: 'WHAT MAKES ME HAPPY',
          answer: 'Any and all concerts, getting outdoors, a really good book.',
        },
        {
          question: 'HOW DO YOU DESCRIBE YOURSELF',
          answer: 'I’m definitley fun and outgoing! I like to be outside all the time.',
        },
      ],
      pictures: [
        'https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-650x433.jpg',
        'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
        'https://cdn-evanmar.pressidium.com/wp-content/uploads/2016/08/How-to-Write-an-Online-Dating-Profile-That-Attracts-People-You-Want-to-Meet.jpg',
      ],
    },
    {
      userName: 'Troy',
      age: 25,
      distance: 12,
      profession: 'Personal Trainer at Gods gym',
      education: 'U of Penn',
      height: '5.11',
      hometown: 'San Diego, Ca',
      questionsnnaire: [
        {
          question: 'WHAT MAKES ME HAPPY',
          answer: 'Any and all concerts, getting outdoors, a really good book.',
        },
        {
          question: 'HOW DO YOU DESCRIBE YOURSELF',
          answer: 'I’m definitley fun and outgoing! I like to be outside all the time.',
        },
      ],
      pictures: [
        'https://i.pinimg.com/originals/16/fb/ae/16fbae144f4d9ad7f7a6031ed6164c7c.jpg',
        'https://previews.123rf.com/images/tunagaga/tunagaga1209/tunagaga120900054/15316998-young-handsome-asian-student-open-a-book-and-smile-in-outdoor.jpg',
        'https://www.ninjaonlinedating.com/images/Articles/Good_Dating_Profile_Photo.jpg',
      ],
    },
  ],
  updateLikedProfile() {
    return { data: 'success' };
  },
  updateDislikeProfile() {
    return { data: 'success' };
  },
};

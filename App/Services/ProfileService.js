
export default {
  getUsersProfiles: () => [
    {
      id: 123,
      userName: 'Josh',
      Age: 23,
      Distance: 4,
      profession: 'Product Designer at Pixie Dust Labs',
      Education: 'University of New Hampshire',
      height: '6.4',
      Hometown: 'San Mateo, Ca',
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
        'http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png',
        'https://i.mdel.net/i/db/2016/8/568246/568246-500w.jpg'
      ],
    },
    {
      id: 1234,
      userName: 'Ted',
      Age: 30,
      Distance: 12,
      profession: 'Personal Trainer at Gods gym',
      Education: 'U of Penn',
      height: '6.2',
      Hometown: 'San Diego, Ca',
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
        'http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png',
        'https://i.mdel.net/i/db/2016/8/568246/568246-500w.jpg'
      ],
    },
    {
      userName: 'Troy',
      Age: 25,
      Distance: 12,
      profession: 'Personal Trainer at Gods gym',
      Education: 'U of Penn',
      height: '5.11',
      Hometown: 'San Diego, Ca',
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
        'http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png',
        'https://i.mdel.net/i/db/2016/8/568246/568246-500w.jpg'
      ],
    },
  ],
  updateLikedProfile() {
    return { data: 'success' };
  },
};

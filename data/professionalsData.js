const profileData = [
  {
    id: 1,
    slug: 'issac-paul',
    name: 'Issac Paul',
    verified: true,
    category:"Therapy",
    experience: 'Therapist · 5+ Years of Experience',
    languages: 'Fluent in English and Malayalam',
    groupSessions: false,
    offlineSessions: true,
    address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
    description: `Hi, this is Issac Paul. I’m here to guide you through life’s challenges with therapy that fosters healing, self-discovery, and personal growth, helping you build a stronger, healthier mindset.
    <br><br>
    When you step into a session with me, you’re entering a space where you can truly be yourself—without judgment, without pressure, just openness and understanding. I believe therapy should feel like a conversation that leads to clarity, healing, and self-discovery. My approach is about more than just addressing challenges; it’s about helping you build a mindset that empowers you to navigate life with confidence and resilience.
    
    <br><br>
    Each session is uniquely shaped around your needs. Whether you’re dealing with anxiety, stress, self-doubt, or past experiences that still weigh on you, we’ll work through them together. I’ll help you uncover patterns, break limiting beliefs, and develop tools that make a real difference in your everyday life. Growth isn’t always easy, but you don’t have to do it alone—I’m here to guide you through it.
    <br><br>

    This journey is about you. It’s about giving yourself the space to reflect, heal, and evolve. My goal is to help you understand yourself better, strengthen your emotional well-being, and create lasting change. Step by step, we’ll work toward a healthier, more empowered version of you.!`,
    education: [
      'MSc Counselling Psychology',
      'BA in Psychology, Sociology and Literature'
    ],
    individualPrice: 2000,
    couplesPrice: 3000,
    profileImage: '/images/therapist/Issac.jpg',
    rating: 5,
    email: 'queries.bettertogether@gmail.com',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
    testimonials: [
      {
        name: 'Jane Doe',
        testimonial:
          'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
      },
      {
        name: 'John Smith',
        testimonial:
          'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
      },
      {
        name: 'Alice Johnson',
        testimonial:
        'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
      }
    ],
    metaTags:'Bengaluru'

  },
  // {
  //   id: 2,
  //   slug: 'therapist-2',
  //   name: 'John Doe',
  //   verified: true,
  //   category:"Therapy",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: true,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 3,
  //   slug: 'therapist-3',
  //   name: 'Therapist 3',
  //   verified: true,
  //   category:"Therapy",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: true,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 4,
  //   slug: 'fitness-1',
  //   name: 'Fitness 1',
  //   verified: true,
  //   category:"Fitness",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: true,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 5,
  //   slug: 'fitness-2',
  //   name: 'Fitness 2',
  //   verified: true,
  //   category:"Fitness",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: true,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 6,
  //   slug: 'fitness-3',
  //   name: 'Fitness 3',
  //   verified: true,
  //   category:"Fitness",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 7,
  //   slug: 'psychiatrist-1',
  //   name: 'Psychiatrist 1',
  //   verified: true,
  //   category:"Psychiatric Care",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 8,
  //   slug: 'psychiatrist-2',
  //   name: 'Psychiatrist  2',
  //   verified: true,
  //   category:"Psychiatric Care",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 9,
  //   slug: 'psychiatrist-3',
  //   name: 'Psychiatrist 3',
  //   verified: true,
  //   category:"Psychiatric Care",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 10,
  //   slug: 'nutritionist-1',
  //   name: 'Nutritionist 1',
  //   verified: true,
  //   category:"Nutrition",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 11,
  //   slug: 'nutritionist-2',
  //   name: 'Nutritionist 2',
  //   verified: true,
  //   category:"Nutrition",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },{
  //   id: 12,
  //   slug: 'nutritionist-3',
  //   name: 'Nutritionist 3',
  //   verified: true,
  //   category:"Nutrition",
  //   experience: 'Therapist · 5+ Years of Experience',
  //   languages: 'Fluent in English and Malayalam',
  //   groupSessions: false,
  //   offlineSessions: false,
  //   address:'John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, Karnataka',
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  //   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  //   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  //   optio, eaque rerum! Provident similique accusantium nemo autem. 
  //   <br><br>
  //   Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  //   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  //   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  //   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  //   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  //   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  //   minima nesciunt dolorem! 
  //   <br><br>
  //   Officiis iure rerum voluptates a cumque velit 
  //   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  //   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  //   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  //   doloremque. Quaerat provident commodi consectetur veniam similique ad 
  //   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  //   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  //   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  //   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  //   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  //   quasi aliquam eligendi, placeat qui corporis!`,
  //   education: [
  //     'MSc Counselling Psychology',
  //     'BA in Psychology, Sociology and Literature'
  //   ],
  //   individualPrice: 1000,
  //   couplesPrice: 4000,
  //   profileImage: '/images/default-pic.jpg',
  //   rating: 5,
  //   email: 'queries.bettertogether@gmail.com',
  //   location:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8571843422683!2d77.59433067392405!3d12.980984914674835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17761506d26b%3A0x1565248049651cb1!2sCubbon%20Park%20Metro%20Entrance%20(Park%20Side)!5e0!3m2!1sen!2sin!4v1738030003333!5m2!1sen!2sin',
  //   testimonials: [
  //     {
  //       name: 'Jane Doe',
  //       testimonial:
  //         'Working with Issac has been a life-changing experience. Their deep understanding and compassionate approach have helped me make significant progress in managing my mental health. I highly recommend their services to anyone seeking professional support.'
  //     },
  //     {
  //       name: 'John Smith',
  //       testimonial:
  //         'Issac Paul’s approach has really helped me gain clarity and improve my emotional well-being. I am grateful for their guidance and feel more confident in facing challenges.'
  //     },
  //     {
  //       name: 'Alice Johnson',
  //       testimonial:
  //         'A truly wonderful experience. Issac Paul listens patiently and gives practical advice that I can apply to everyday life. Highly recommended for anyone seeking a supportive therapist.'
  //     }
  //   ],
  //   metaTags:'Bengaluru'
  // },
]

export default profileData

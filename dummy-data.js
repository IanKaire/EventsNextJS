const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Developing Developers in Kenya',
      description:
        'Do you love coding? If yes, I am here to tell you that everyone can learn to code! Yes, everyone! In this live event, you are going to be taken through the roadmap of a becoming a Software Developer.',
      location: 'Nairobi Garage past CBD 23, 54321 Nairobi City',
      date: '2023-08-12',
      image: 'images/developer-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'The Truth about Talent',
      description:
        "Genes do not eliminate the need for hard work they clarify it, they tell us what to work hard on. If you are having a hard time discovering your niche, this is a miss not!",
      location: 'Nyali 4, 87654 Mombasa City',
      date: '2023-08-30',
      image: 'images/talent-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'The Principle of Management',
      description:
        'Do you struggle with your finances? Then this event is for you - You will discover why money is attracted to management.',
      location: 'Gilgil 14, 88906 Nakuru City',
      date: '2023-07-10',
      image: 'images/finances-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
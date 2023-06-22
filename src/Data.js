import { hotelController } from "./api";





export const hotelsData = [

  {
    name: "Hotel 1",
    city: "New York",
    image: "image1.jpg",
    priceLevel: "$$",
    rating: 4.5,
    numOfReviews: 500,
    hotelClass: "4 stars",
    phone: "123-456-7890",
    address: "123 Main St",
    location: "New York, NY",
  },
  {
    name: "Hotel 2",
    city: "Los Angeles",
    image: "image2.jpg",
    priceLevel: "$",
    rating: 3.8,
    numOfReviews: 200,
    hotelClass: "3 stars",
    phone: "555-555-5555",
    address: "456 Elm St",
    location: "Los Angeles, CA",
  },
  {
    name: "Hotel 3",
    city: "Paris",
    image: "image3.jpg",
    priceLevel: "$$$",
    rating: 4.9,
    numOfReviews: 800,
    hotelClass: "5 stars",
    phone: "999-999-9999",
    address: "789 Oak St",
    location: "Paris, France",
  },
];


export const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    passwordChangedAt: "2020 / 4 / 4",
    passwordRestToken: "2020 / 4 / 4",
    passwordResetExpiresIn: "2020 / 4 / 4",
  },

  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    passwordChangedAt: "2020 / 4 / 4",
    passwordRestToken: "2020 / 4 / 4",
    passwordResetExpiresIn: "2020 / 4 / 4",
  },
];

export const restaurantsData = [
  {
    name: "Restaurant 1",
    image: "image1.jpg",
    priceLevel: "$$",
    rating: 4.5,
    phone: "123-456-7890",
    cuisine: "Italian",
    location: "New York, NY",
  },
  {
    name: "Restaurant 2",
    image: "image2.jpg",
    priceLevel: "$",
    rating: 3.8,
    phone: "555-555-5555",
    cuisine: "Mexican",
    location: "Los Angeles, CA",
  },
  {
    name: "Restaurant 3",
    image: "image3.jpg",
    priceLevel: "$$$",
    rating: 4.9,
    phone: "999-999-9999",
    cuisine: "French",
    location: "Paris, France",
  },
];

export const attractionsData = [
  {
    name: "Attraction 1",
    image: "https://example.com/image1.jpg",
    rating: 4.5,
    num_reviews: 10,
    description: "This is a description of Attraction 1.",
    location: "New York City",
    activityDescriptors: "Museum, Art, History",
  },
  {
    name: "Attraction 2",
    image: "https://example.com/image2.jpg",
    rating: 3.9,
    num_reviews: 5,
    description: "This is a description of Attraction 2.",
    location: "San Francisco",
    activityDescriptors: "Park, Nature, Hiking",
  },
  // add more attractions as needed
];

export const usersHeaders = [
  "#",
  "Name",
  "Email",
  "Role",
  "passwordChangedAt",
  "passwordRestToken",
  "passwordResetExpiresIn",
];

export const restaurantsheaders = [
  "ID",
  "Name",
  "Name",
  "image",
  "Price Level",
  "phone",
  "describtion",
  "Number Reviews",
  "Cuisine",
  "actions",
];

export const hotelsheaders = [
  "Id",
  "Name",
  "Image",
  "Price Level",
  "Rating",
  "Number of Reviews",
  "Hotel Class",
  "Phone",
  "Address",
  "Location",
];

export const attarctionsHeader = [
  "#",
  "#",
  "#",
  "Name",
  "Image",
  "Rating",
  "Number",
  "Description",
  "Location",
  "Activity",
];

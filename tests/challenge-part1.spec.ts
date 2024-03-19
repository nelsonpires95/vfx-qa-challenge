import { test, expect } from '@playwright/test';
import axios from 'axios';

test('Create and retrieve a customer booking', async () => {
  // Define the API URL
  const API_URL = 'https://restful-booker.herokuapp.com/booking';

  // Define the data for creating a booking
  const bookingData = {
    firstname: "",
    lastname: "",
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01"
    },
    additionalneeds: "extra needs"
  };

  // Create a booking
  const createBookingResponse = await axios.post(API_URL, bookingData, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  // Ensure booking creation was successful
  expect(createBookingResponse.status).toBe(200);

  // Extract the booking ID from the response
  const bookingId = createBookingResponse.data.bookingid;

  // Retrieve the booking using the booking ID
  const retrieveBookingResponse = await axios.get(`${API_URL}/${bookingId}`, { 
    headers: {
      'Accept': 'application/json'
  }});
  
  // Ensure the retrieved booking's firstname matches the expected firstname
  expect(retrieveBookingResponse.data.firstname).toBe(bookingData.firstname);
});

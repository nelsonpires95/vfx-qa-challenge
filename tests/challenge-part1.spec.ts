import { test, expect } from '@playwright/test';
import axios from 'axios';

test('create and retrieve a customer booking', async () => {

  const API_URL = 'https://restful-booker.herokuapp.com/booking';

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

  const createBookingResponse = await axios.post(API_URL, bookingData, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  expect(createBookingResponse.status).toBe(200);

  const bookingId = createBookingResponse.data.bookingid;
  const retrieveBookingResponse = await axios.get(`${API_URL}/${bookingId}`, { 
    headers: {
      'Accept': 'application/json'
  }});

  expect(retrieveBookingResponse.data.firstname).toBe(bookingData.firstname);
});

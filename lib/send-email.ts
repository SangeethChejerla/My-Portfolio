import { FormData } from '@/components/contactform';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json', // Add Content-Type header for JSON data
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const responseJson = await response.json();
    {/* need add toast */}
    alert(responseJson.message); // Display success message
  } catch (error) {
    alert('An error occurred while sending email. Please try again later.'); // Display user-friendly error message
  } finally {
    // Optionally, remove any loading indicators here
  }
}
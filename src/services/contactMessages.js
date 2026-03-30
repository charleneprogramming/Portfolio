import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'

function formatMessageText({ fullName, phoneNumber, email, message }) {
  return [
    'New portfolio contact message',
    '',
    `Full name: ${fullName}`,
    `Phone number: ${phoneNumber}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n')
}

export async function submitContactMessage({
  fullName,
  phoneNumber,
  email,
  message,
}) {
  if (!isFirebaseConfigured || !db) {
    throw new Error(
      'Firebase is not configured yet. Add your Vite Firebase environment variables first.',
    )
  }

  const trimmedPayload = {
    fullName: fullName.trim(),
    phoneNumber: phoneNumber.trim(),
    email: email.trim(),
    message: message.trim(),
  }

  if (
    !trimmedPayload.fullName ||
    !trimmedPayload.phoneNumber ||
    !trimmedPayload.email ||
    !trimmedPayload.message
  ) {
    throw new Error('Please complete all contact form fields.')
  }

  const contactRef = await addDoc(collection(db, 'contactMessages'), {
    ...trimmedPayload,
    createdAt: serverTimestamp(),
    source: 'portfolio-contact-form',
  })

  const notificationEmail = import.meta.env.VITE_CONTACT_NOTIFICATION_EMAIL

  if (notificationEmail) {
    // This works with Firebase's "Trigger Email" extension listening to the `mail` collection.
    await addDoc(collection(db, 'mail'), {
      to: notificationEmail,
      message: {
        subject: `New portfolio inquiry from ${trimmedPayload.fullName}`,
        text: formatMessageText(trimmedPayload),
      },
      createdAt: serverTimestamp(),
      metadata: {
        contactMessageId: contactRef.id,
        source: 'portfolio-contact-form',
      },
    })
  }

  return contactRef.id
}

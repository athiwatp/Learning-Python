from twilio.rest import TwilioRestClient
 
# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "ACd1967d0ba8adb1b37c936087369a7c84"
auth_token  = "a26d14026c0d09220a08a4b765b18b19"
client = TwilioRestClient(account_sid, auth_token)
 
message = client.messages.create(
    body="Hello from twilio on python",
    to="+660800803702",    # Replace with your phone number
    from_="+181345300159") # Replace with your Twilio number
print message.sid

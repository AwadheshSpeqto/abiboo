import React from 'react'
import { useState,useRef } from 'react';
import { CommsProvider,Button,Session,Conference,ParticipantsGrid,LeaveConferenceButton } from '@dolbyio/comms-uikit-react'

export default function Videocall() {
    const [inCall, setInCall] = useState(false);
    const video = useRef(null);

    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY4NDI0MTcxMCwic3ViIjoiMHVyT2xSQjhIY01qTEtjZkVMNXNaUT09IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJ0YXJnZXQiOiJzZXNzaW9uIiwib2lkIjoiZmIwMTUxODMtYWNlYy00ZGY5LWE5ODAtODU3MmQzOTdiMzNjIiwiYWlkIjoiMjE4MjRhYWItNWUwOS00ZWNiLWE5NWItMzc1MjQ2ZTY0YzcwIiwiYmlkIjoiOGEzNjhjZWU4ODIzYzJhZTAxODgyNDZiNThlZjJjYTgiLCJleHAiOjE2ODQzMjgxMTB9.wdX786y1narElcsk88enqU0JhQ2--vIWALkEy0OEdDVUTCh4X5Clr9fCxuCOxWhZeOOiOYzwZef0Vc8JSMj8vw"
  return (
    <>
        <CommsProvider token={token}>
      <div className="videocall">
            { !inCall ? (
                <Button onClick={() => setInCall(true) }>Join</Button>
              ) : (
                <div>
                <Session participantInfo={ { name: 'Awadhesh Yadav' } }>
                  <Conference audio={ true } video={ true } alias="Business meeting" >
                    <ParticipantsGrid localText="You" />
                    <video ref={video} />
                    <LeaveConferenceButton tooltipText="Leave" onSuccess={() => setInCall(false)} />
                  </Conference>
                </Session>
                </div>
              )
            }
      </div>
    </CommsProvider>
    </>
  )
}

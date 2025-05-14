import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <div>
      {selectedBox ? (
        <>
          <h2>Mailbox {selectedBox._id}</h2>
          <p>
            <strong>Boxholder:</strong> {selectedBox.boxOwner}
          </p>
          <p>
            <strong>Box Size:</strong> {selectedBox.boxSize}
          </p>
        </>
      ) : (
        <p>Mailbox not found.</p>
      )}
    </div>
  );
};

export default MailboxDetails;

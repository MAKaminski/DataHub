// New Modal component
export function Modal({ show, onClose, user }) {
    if (!show) return null;
  
    return (
      <div>
        <h2>Submit Request</h2>
        <form>
          <label>
            Requestor:
            <input type="text" value={user.email} readOnly />
          </label>
          <label>
            Request Type:
            <input type="text" />
          </label>
          <label>
            Tags:
            <input type="text" />
          </label>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    );
  }
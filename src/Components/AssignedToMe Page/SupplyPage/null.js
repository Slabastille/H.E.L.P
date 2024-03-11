<form onSubmit={handleSubmit} className="formContents">
  {Object.keys(apiBody).map((key) => (
    <div className="supplyFormChild" key={key}>
      <div className="supplyFormChild1">{key}</div>
      <div className="supplyFormChild2">
        {isEditing[key] ? (
          <div className="supplyFormChild2-1">
            <div>
              <input
                name={key}
                type="text"
                value={apiBody[key]}
                onChange={handleChange}
                className="summary"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  toggleSave(key);
                }}
                className="saveButton"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>{apiBody[key]}</div>
            <div onClick={() => toggleEdit(key)}>Edit</div>
          </div>
        )}
      </div>
    </div>
  ))}

  {/* Submit button */}
  <button type="submit" className="supplyPreviewSubmit">
    Submit
  </button>
</form>;

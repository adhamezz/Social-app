import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormField({
  elemetType, // input or select or textarea
  inputType, // text, email, password
  lableText,
  id,
  placeholder,
  name,
  className,
  value,
  onChange,
  onBlur,
  startIcon,
  error,
  touched,
  options, // for select element
  isExistError,
}) {
  const renderElement = () => {
    switch (
      elemetType // elementType is an input
    ) {
      case "input":
        return (
          <>
            <input
              type={inputType}
              placeholder={placeholder}
              className={`form-control ${className}`}
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          </>
        );

      case "select":
        return (
          <>
            <select //elementType is a select
              className={`form-control ${className}`}
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            >
              {options.map((option, index) => (
                //this is an array of objects
                //options is an array ==>
                // and option is an object
                // with a value which will be sent to the backend  ==> option.value
                // and  a word that will be displayed to the user ==> option.text
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </>
        );

      case "textarea":
        return (
          <>
            <textarea
              placeholder={placeholder}
              className={`form-control ${className}`}
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}>
            </textarea>
          </>
        );
    }
  };

  return (
    <>
      <div>
        {lableText && (
          <label htmlFor={id} className="text-sm mb-1">
            {lableText}
          </label>
        )}

        <div className="relative">
          {renderElement()}

          {startIcon && (
            <FontAwesomeIcon
              icon={startIcon}
              className=" text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
            />
          )}
        </div>

        {error && touched ? <p className="text-red-500">*{error}</p> : ""}
        {isExistError && <p className="text-red-500">*{isExistError}</p>}
      </div>
    </>
  );
}

import { useState, type ChangeEvent, MouseEventHandler } from "react";
import FolderIcon from "./Icons/Folder";
import XCircleIcon from "./Icons/XCircle";
import { FaCropSimple } from "react-icons/fa6";

interface TextInputProps {
  name: string;
  type: "email" | "text" | "password";
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
}

export function TextInput({
  name,
  type,
  handleChange,
  className,
  placeholder,
  required,
  pattern,
}: TextInputProps) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        onChange={handleChange}
        className={
          "peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 " +
          className
        }
        placeholder=" "
        required={required}
        pattern={pattern}
      />
      <label
        htmlFor={name}
        className={
          "pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        }
      >
        {placeholder}
      </label>
    </div>
  );
}

interface FileInputProps {
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
  required?: boolean;
  accept?: string;
}

export function FileInput({
  name,
  handleChange,
  className,
  placeholder,
  required,
  accept,
}: FileInputProps) {
  const [file, setFile] = useState({
    name: "",
    url: "",
    type: "",
    percentage: 0,
  });

  function deleteFile(event: any) {
    event.preventDefault();
    setFile({
      name: "",
      url: "",
      type: "",
      percentage: 0,
    });
    changeEvent();
    const fileInput = document.getElementById(
      name + "_handler",
    ) as HTMLInputElement;
    fileInput.value = "";
  }

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]!;

    if (accept) {
      const regex = new RegExp(accept.replace(/\*/g, ".*").replace(/\,/g, "|"));
      if (!regex.test(file.type))
        return alert(`File type ${file.type} is not allowed`);
    }
    setFile({
      name: file.name,
      url: "",
      type: file.type,
      percentage: 5,
    });
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.upload.addEventListener(
      "progress",
      function (evt) {
        if (evt.lengthComputable) {
          var percentComplete = evt.loaded / evt.total;
          percentComplete = percentComplete * 100;
          setFile((value) => {
            return { ...value, percentage: percentComplete - 20 };
          });
        }
      },
      false,
    );

    xhr.onload = () => {
      if (xhr.response.status == 200) {
        setFile((value) => {
          return { ...value, url: xhr.response.data.id, percentage: 100 };
        });
      } else {
        alert("Upload error, please try again!");
        setFile({
          name: "",
          url: "",
          type: "",
          percentage: 0,
        });
      }
      changeEvent();
      const fileInput = document.getElementById(
        name + "_handler",
      ) as HTMLInputElement;
      fileInput.value = "";
    };

    var formData = new FormData();
    formData.append("file", file);
    xhr.open("POST", "/api/file", true);
    xhr.send(formData);
  }

  function changeEvent() {
    var event = new Event("input", { bubbles: true });
    const input = document.getElementById(name) as HTMLInputElement;
    input.dispatchEvent(event);
  }

  return (
    <div className="relative">
      <label
        htmlFor={name + "_handler"}
        className={"w-full hover:cursor-pointer " + className}
      >
        <div className="group flex items-center space-x-2">
          <span className="block w-full rounded-lg border border-neutral-500 bg-transparent px-2.5 py-3.5 text-sm text-gray-500 group-active:border-white">
            {file.name ? (
              <div className="flex items-center space-x-2 text-white">
                <FolderIcon />
                <div className="block w-full">
                  <span>{file.name}</span>
                  {file.percentage != 0 && file.percentage != 100 && (
                    <div className="relative -bottom-1 h-1 w-full rounded-full bg-neutral-500">
                      <div
                        className="h-1 rounded-full bg-white"
                        style={{ width: file.percentage + "%" }}
                      ></div>
                    </div>
                  )}
                </div>
                <button type="button" onClick={deleteFile}>
                  <XCircleIcon className="[&>path]:transition-colors [&>path]:hover:stroke-red-500" />
                </button>
              </div>
            ) : (
              placeholder
            )}
          </span>
          <span className="whitespace-nowrap text-sm font-medium text-neutral-500">
            Pilih file
          </span>
        </div>
        <input
          name={name + "_handler"}
          type="file"
          onChange={handleFile}
          className="hidden"
          id={name + "_handler"}
          accept={accept}
          disabled={file.percentage != 0 && file.percentage != 100}
        />
      </label>
      <input
        name={name}
        value={file.url}
        onChange={handleChange}
        type="hidden"
        required={required}
        id={name}
      />
    </div>
  );
}

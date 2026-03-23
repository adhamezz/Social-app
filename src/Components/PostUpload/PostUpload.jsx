import {
  faImage,
  faLightbulb,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import FormField from "../ui/FormField/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostUpload({ getAllPosts }) {
  const [previewImage, setPreviewImage] = useState(null);
  const { token } = useContext(AuthContext);

  const validationSchema = yup.object({
    body: yup
      .string()
      .required("caption is required")
      .min(3, "caption can not be less than 3 characters")
      .max(500, "caption can not be more than 500 characters"),

    image: yup
      .mixed()
      .nullable()

      //^ .test (unique id, message to user,  logic )
      .test("fileSize", "file is too large (max:5MB)", (file) => {
        if (!file) return true;
        return file.size <= 5 * 1024 * 1024;

        //^ comparison operators
        //* return true => ✅
        //* return false =>❌
      })

      //*   get types of image from meme types from https://www.iana.org/assignments/media-types/media-types.xhtml
      .test("fileType", "only image files are allowed", (file) => {
        if (!file) return true;
        const supportedTypes = [
          "image/jpg",
          "image/png",
          "image/jpeg",
          "image/gif",
        ];
        return supportedTypes.includes(file.type);

        //^ includes return
        //* return true => ✅
        //* return false =>❌
      }),
  });

  async function handleSubmit(values) {
    try {
      const formData = new FormData();
      formData.append("body", values.body);
      if (values.image) {
        formData.append("image", values.image);
      }

      const options = {
        url: "https://linked-posts.routemisr.com/posts",
        method: "POST",
        headers: {
          token,
        },
        data: formData,
      };

      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("post created successfully");
        formik.resetForm();
        setPreviewImage(null);

        //* get all posts
        getAllPosts();
      }
      console.log(data);
    } catch (error) {
      toast.error("failed to create post");
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      body: "",
      image: null,
    },

    validationSchema,

    onSubmit: handleSubmit,
  });

  function handleImageChange(e) {
    const file = e.target.files[0];
    formik.setFieldValue("image", file);

    const url = URL.createObjectURL(file);

    // ^ file to => URL

    setPreviewImage(url);
  }

  return (
    <>
      <section className="bg-white shadow p-7 mb-10 rounded-2xl space-y-4">
        <header className="flex gap-3 items-center">
          <div className="avatar">
            <img
              src="https://linked-posts.routemisr.com/uploads/default-profile.png"
              alt=""
              className="size-12 rounded-full border border-gray-500/10 shadow"
            />
          </div>

          <div>
            <h3 className="font-semibold">Create a Post</h3>
            <p className="text-sm text-gray-500 -mt-0.5">
              Share your thoughts with the world
            </p>
          </div>
        </header>

        <form className="space-y-4 " onSubmit={formik.handleSubmit}>
          <FormField
            elemetType={"textarea"}
            placeholder={`what's on your mind?`}
            startIcon={faLightbulb}
            className={"min-h-24"}
            value={formik.values.body}
            name={"body"}
            id={"body"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.body}
            touched={formik.touched.body}
          />

          {previewImage && (
            <div className="preview relative">
              <img
                src={previewImage}
                alt=""
                className="w-full aspect-video object-cover rounded-2xl mb-5"
              />
              <button
                type="button"
                onClick={() => {
                  setPreviewImage(null);
                  formik.setFieldValue("image, null");
                }}
                className="size-7 rounded-full 
                   flex justify-center items-center bg-red-500
                  hover:bg-red-600 transition-colors duration-100 text-white absolute top-4 right-4"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button type="button" className="flex flex-col items-start gap-1">
              <label
                htmlFor="image"
                className="btn rounded-md cursor-pointer  
                hover:scale-107 transition-transform duration-300"
              >
                <div className="space-x-1">
                  <FontAwesomeIcon icon={faImage} />
                  <span>Upload a Photo</span>
                </div>
              </label>

              <FormField
                elemetType={"input"}
                inputType={"file"}
                name={"image"}
                id={"image"}
                className={"hidden"}
                onChange={handleImageChange}
                onBlur={formik.handleBlur}
                error={formik.errors.image}
                touched={formik.touched.image}
              />
            </button>

            <button
              className="btn space-x-1 hover:scale-107 transition-transform duration-300
               border-none bg-linear-to-br from-blue-600 to-cyan-500 text-white"
              type="submit"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Post</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

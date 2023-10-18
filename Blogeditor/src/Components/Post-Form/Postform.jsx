import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Selector, RTE } from "../index";
import dataBaseService from "../../Appwrite/Conf";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Postform({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValue } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.authen.useData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? dataBaseService.uploadFile(data.image[0])
        : null;

      if (file) {
        dataBaseService.deleteFile(data.featuredImg);
      }
      const DBpost = await dataBaseService.updateDatabase(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined,
      });
      if (DBpost) {
        navigate(`/post/${DBpost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? dataBaseService.uploadFile(data.image[0])
        : null;
      if (file) {
        const fileID = file.$id;
        data.featuredImg = fileID;
        const DBpost = await dataBaseService.createDatabase({
          ...data,
          userId: userData.$id,
        });
        if (DBpost) {
          navigate(`/post/${DBpost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValdite: true,
          })
        );
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  return <div></div>;
}

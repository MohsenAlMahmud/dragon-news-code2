import React from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCard = ({ news }) => {
    const { title, image_url, author, details, rating, total_view, tags } = news;

    return (
        <div className="card bg-base-100  hover:shadow-2xl transition-all duration-300">
            {/* Author Info */}
            <div className="flex justify-between bg-base-200 items-center">
                <div className="flex items-center gap-3 px-5 pt-5">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author.img} alt={author.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </div>

                </div>
                <div>
                    <button className="text-gray-500 hover:text-primary flex pr-5 gap-3">
                        <FaRegBookmark size={24}></FaRegBookmark>
                        <FaShareAlt size={24}></FaShareAlt>
                    </button>
                </div>
            </div>

            {/* Image */}
            <figure className="px-5 pt-4">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-xl h-52 w-full object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body">
                <h2 className="card-title text-lg font-bold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-700">
                    {details.slice(0, 180)}...
                    <a href="#" className="text-blue-500 font-semibold ml-1">
                        Read More
                    </a>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="badge badge-outline badge-primary text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Rating + Views */}
                <div className="flex justify-between items-center mt-5 border-t pt-3 text-sm">
                    <div className="flex items-center gap-1 text-yellow-500 font-medium">
                        <FaStar /> {rating.number}
                        <span className="badge badge-warning badge-sm ml-2">
                            {rating.badge}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600">
                        <FaEye /> {total_view.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

import Skeleton from "react-loading-skeleton";
import usePhoto from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
    // we need to get the logged in user's photo
    const { photos } = usePhoto();
    // on loading the photo, wo need to use react skeleton
    // if we have photos, render them (create a post component)
    // if the user has no photos, tell them to create some photos

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton
                    key={4}
                    count={1}
                    width={640}
                    height={500}
                    className="mb-5"
                />
            ) : photos?.length > 0 ? (
                photos.map((content) => (
                    <Post key={content.docId} content={content} />
                ))
            ) : (
                <p className="text-center text-2xl">
                    Follow people to see photos
                </p>
            )}
        </div>
    );
}

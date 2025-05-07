const PreviewVideo = () => {
    return (
        <section className="flex justify-center items-center py-16 px-6 bg-neutral-900">
            <div className="max-w-[375px] w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                <video
                    controls
                    className="w-full h-full object-cover"
                    // poster="/thumbnail.jpg"
                >
                    <source src="https://res.cloudinary.com/dquq0mrkt/video/upload/v1746607729/fashion_s3llhe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default PreviewVideo;
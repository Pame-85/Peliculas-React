import { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./_VideoModal.sass";

const VideoModal = ({ videoKey, videoPlatform, isOpen, close }) => {
  const [urlVideo, setUrlVideo] = useState(null);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoPlatform, videoKey]);
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls muted />
    </Modal>
  );
};

export default VideoModal;
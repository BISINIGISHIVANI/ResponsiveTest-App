import html2canvas from "html2canvas";
export const getSnapshotOfImage=async (element,fileName)=>{
        const canvas = await html2canvas(element);
        const imageDownload = canvas.toDataURL("image/png", 1.0);
        downloadImage(imageDownload,fileName)
      }
const downloadImage = (website, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;
        
        fakeLink.href = website;
        
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
      }
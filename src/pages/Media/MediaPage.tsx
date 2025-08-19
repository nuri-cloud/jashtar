import Navpanel from '@/widgets/Navpanel/Navpanel';
import { PhotoGallery } from './ui/PhotoGallery/PhotoGallery';
import { VideoGallery } from './ui/VideoGallery/VideoGallery';
export function MediaPage() {
    return (
        <div>
            <Navpanel text='Главная' link='/' text2='Медиа'/>
            <PhotoGallery />
            <VideoGallery />
        </div>
    );
}

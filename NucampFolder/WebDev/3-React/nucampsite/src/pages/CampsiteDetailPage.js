import CommentsList from '../features/comments/CommentsList';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsitesDirectoryPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;
import { Row, Col } from "@doar/components";
import { conversions } from "@doar/shared/data/dashboard-six";
import JobCard from "../../../components/dashboard-six/job-card";

const RowOne = () => {
    return (
        <Row gutters={30}>
            {conversions.map((data) => (
                <Col sm={6} lg={3} mb={30} key={data.id}>
                    <JobCard
                        title={data.title}
                        amount={data.amount}
                        icon={data.icon}
                        color={data.color}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default RowOne;

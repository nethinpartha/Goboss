import React, { useEffect } from 'react';
import { pathOr } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../styles/layouts/page/scss/membershipstyle.scss';
import { MembershipGlobalStyle } from '../../styles/layouts/page/styledcomponent/membershipstyle';
import { membershipaction } from '../../actions/membershipactions';
import { Cards, ChoosePlanDetails } from '../../components/Plans/index'
import { getSubscriptionList } from '../../actions/getSubscription.action';
import MembershipDetailsList from '../../selectors/membershiplistselector';
import { showModalComAction } from '../../actions/showmodal.action';

const plansDetails = {
    planHeader: 'Choose the plan that’s right for you',
    planSubtitle: "",
    step: '',
    benefits: [
        'Downgrade or upgrade at any time.',
        'No commitments, cancel anytime.',
        'Everything on Tentkotta for one low price.',
        'No ads and no extra fees. Ever.'
    ]
};

function MemberShip() {
    const dispatch = useDispatch();
    const history = useHistory();
    const membershipdetails = MembershipDetailsList();
    const loading = useSelector(state => pathOr([], ['SubscriptionListReducer', 'loading'])(state));

    const handleSubscriptionPlanClick = (membership) => {
        const selectedPlan = pathOr(null, ['title'])(membership);
        const main = pathOr(null, ['main'])(membership);
        const fraction = pathOr(null, ['currency'])(membership);
        const planId = pathOr('', ['id'])(membership);
        const prodId = pathOr('', ['product'])(membership);
        const data = {
            selectedPlan,
            currency: `${fraction} ${main}`,
            amount: `${main}`,
            planId,
            prodId
        };
        dispatch(membershipaction.selectedmembership(data));
        dispatch(showModalComAction.ShowModal('paymentpage'));
        // dispatch(showModalComAction.CloseModal('membership'));
        // return history.push('/paymentoptions');
    }

    useEffect(() => {
        dispatch(getSubscriptionList.getSubscriptionListAction());
    }, []);

    return (
        <>
            <MembershipGlobalStyle />
            <main
                className="membership-background"
                style={{}} >
                <section className="container">
                    <ChoosePlanDetails
                        plansDetails={plansDetails}
                    />
                    <Cards
                        handleSubscriptionPlanClick={handleSubscriptionPlanClick}
                        membershipdetails={membershipdetails}
                        loading={loading}
                    />
                </section>
            </main>
        </>
    )
};

export default MemberShip;
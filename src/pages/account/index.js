import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Button from '@/components/Button/index';
import Card from '@/components/Card/index';
import Content from '@/components/Content/index';
import Meta from '@/components/Meta/index';
import { useInvitations, useWorkspaces } from '@/hooks/data/index';
import { AccountLayout } from '@/layouts/index';
import api from '@/lib/common/api';
import { useWorkspace } from '@/providers/workspace';

const Welcome = () => {
  const router = useRouter();
  const { data: invitationsData, isLoading: isFetchingInvitations } =
    useInvitations();
  const { data: workspacesData, isLoading: isFetchingWorkspaces } =
    useWorkspaces();
  const { setWorkspace } = useWorkspace();
  const [isSubmitting, setSubmittingState] = useState(false);

  const accept = (memberId) => {
    setSubmittingState(true);
    api(`/api/workspace/team/accept`, {
      body: { memberId },
      method: 'PUT',
    }).then((response) => {
      setSubmittingState(false);

      if (response.errors) {
        Object.keys(response.errors).forEach((error) =>
          toast.error(response.errors[error].msg)
        );
      } else {
        toast.success('Accepted invitation!');
      }
    });
  };

  const decline = (memberId) => {
    setSubmittingState(true);
    api(`/api/workspace/team/decline`, {
      body: { memberId },
      method: 'PUT',
    }).then((response) => {
      setSubmittingState(false);

      if (response.errors) {
        Object.keys(response.errors).forEach((error) =>
          toast.error(response.errors[error].msg)
        );
      } else {
        toast.success('Declined invitation!');
      }
    });
  };

  const navigate = (workspace) => {
    setWorkspace(workspace);
    router.replace(`/account/${workspace.slug}`);
  };

  return (
    <AccountLayout>
      <Meta title="Unlimited Now - Dashboard" />
      <Content.Title
        title="Dashboard"
        subtitle="Start building your site now."
      />
      <Content.Divider />
      <Content.Container>
        
      <div className="div">
          <a className="px-6 py-3 text-center text-blue-600 rounded shadow hover:bg-blue-50" href="https://get.unlimitednow.site/">
          <div className="div-2">
            <picture>
              <source
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495"
                type="image/webp"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495"
                sizes="(max-width: 638px) 56vw, (max-width: 998px) 36vw, 26vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F355418110bb646c0881b7eaef16fd495"
                className="image"
              />
            </picture>
            <div className="builder-image-sizer image-sizer" />
          </div>
          <div className="div-3">
            <p>Start an Online Business</p>
          </div>
        </a>
          
      </div>
      <style jsx>{`
        .div {
          position: relative;
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .div {
            width: auto;
            align-self: center;
          }
        }
        .a {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(232, 233, 233, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          text-align: center;
          cursor: pointer;
          pointer-events: auto;
        }
        @media (max-width: 640px) {
          .a {
            width: auto;
            flex-grow: 0;
          }
        }
        .div-2 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 56.699999999999996%;
          pointer-events: none;
          font-size: 0;
        }
        .div-3 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: 49px;
          margin-bottom: 49px;
        }
        .a-2 {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(232, 233, 233, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 020px;
          margin-bottom: 20px;
          cursor: pointer;
          pointer-events: auto;
        }
        .div-4 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image-sizer-2 {
          width: 100%;
          padding-top: 56.3%;
          pointer-events: none;
          font-size: 0;
        }
        .div-5 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .a-3 {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(232, 233, 233, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          pointer-events: auto;
        }
        .div-6 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image-sizer-3 {
          width: 100%;
          padding-top: 56.3%;
          pointer-events: none;
          font-size: 0;
        }
        .div-7 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .a-4 {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(232, 233, 233, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          pointer-events: auto;
        }
        .div-8 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image-sizer-4 {
          width: 100%;
          padding-top: 56.3%;
          pointer-events: none;
          font-size: 0;
        }
        .div-9 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: 49px;
          margin-bottom: 49px;
        }
        .a-5 {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(232, 233, 233, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          pointer-events: auto;
        }
        .div-10 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image-sizer-5 {
          width: 100%;
          padding-top: 56.3%;
          pointer-events: none;
          font-size: 0;
        }
        .div-11 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .a-6 {
          display: flex;
          max-width: 357px;
          width: 357px;
          border-radius: 4px;
          border-color: rgba(214, 191, 37, 1);
          border-width: 2px;
          border-style: solid;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          margin-top: 0px;
          margin-bottom: -5px;
          cursor: pointer;
          pointer-events: auto;
          padding-left: 20px;
          padding-top: 20px;
          padding-right: 20px;
        }
        .div-12 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 353px;
          width: 353px;
          height: 288px;
        }
        .image-2 {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-6 {
          width: 100%;
          padding-top: 56.3%;
          pointer-events: none;
          font-size: 0;
        }
        .div-13 {
          max-width: 175px;
          color: rgba(31, 31, 31, 1);
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 1px;
          text-align: center;
          font-family: Poppins, sans-serif;
          margin-left: auto;
          margin-right: auto;
          margin-top: -49px;
          margin-bottom: 47px;
          padding-top: 32px;
        }
      `}</style>
      </Content.Container>
      <Content.Divider thick />
      <Content.Title
        title="Workspace Invitations"
        subtitle="Listed here are the invitations received by your account"
      />
      <Content.Divider />
      <Content.Container>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {isFetchingInvitations ? (
            <Card>
              <Card.Body />
              <Card.Footer />
            </Card>
          ) : invitationsData?.invitations.length > 0 ? (
            invitationsData.invitations.map((invitation, index) => (
              <Card key={index}>
                <Card.Body
                  title={invitation.workspace.name}
                  subtitle={`You have been invited by ${
                    invitation.invitedBy.name || invitation.invitedBy.email
                  }`}
                />
                <Card.Footer>
                  <Button
                    className="text-white bg-blue-600 hover:bg-blue-500"
                    disabled={isSubmitting}
                    onClick={() => accept(invitation.id)}
                  >
                    Accept
                  </Button>
                  <Button
                    className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                    disabled={isSubmitting}
                    onClick={() => decline(invitation.id)}
                  >
                    Decline
                  </Button>
                </Card.Footer>
              </Card>
            ))
          ) : (
            <Card.Empty>
              You haven&apos;t received any invitations to a workspace yet.
            </Card.Empty>
          )}
        </div>
      </Content.Container>
    </AccountLayout>
  );
};

export default Welcome;
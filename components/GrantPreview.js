import classnames from "classnames";
import Link from "next/link";

export default function GrantPreview({ grant }) {
  const isCompleted = grant.extra.completed;
  const isOpen = !isCompleted && grant.extra.assignee === "";
  const type = grant.taxonomies.grant_type;

  const className = classnames({
    "bg-lightBlue": type.includes("Proposal") && isOpen,
    "bg-green-200": type.includes("Apprenticeship") && isOpen,
    "bg-yellow-100": type.includes("Bounty") && isOpen,
  });

  return (
    <div
      key={grant.slug}
      className={`mb-4 cursor-pointer bg-wall-100 rounded-lg ${className}`}
    >
      <Link href={`/grants/${grant.slug}`}>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <h3 className="type-ui" id={grant.slug}>
              {grant.title}
            </h3>
            <div className={`bg-wall-500 text-wall-100 badge-sm ml-2`}>
              {!isCompleted ? (isOpen ? "Open" : "In Progress") : "Completed"}
            </div>
          </div>
          <p className="mb-4">{grant.extra.description}</p>
          <div className="flex w-full flex-col md:flex-row md:items-center justify-between">
            <p className="text-wall-500">
              <strong>Reward: </strong>
              {grant.extra.reward} star
              {grant.extra.reward === 1 ? "" : "s"}
            </p>
            <div className="flex items-center flex-wrap md:mt-0 mt-4">
              {grant.taxonomies.grant_type.map((category) => {
                const className = classnames({
                  "bg-blue-400 text-white": category === "Proposal",
                  "bg-green-400 text-white": category === "Apprenticeship",
                  "bg-yellow-300": category === "Bounty",
                });
                return (
                  <div className={`${className} badge-sm mr-1 my-1`}>
                    {category}
                  </div>
                );
              })}
              {grant.taxonomies.grant_category.map((category) => (
                <div className="bg-wall-500 text-wall-100 badge-sm mr-1 my-1">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

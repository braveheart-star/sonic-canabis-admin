import React from "react";

const headings = [
  {
    key: "userId",
    value: "User ID",
  },
  {
    key: "firstName",
    value: "Firstname",
  },
  {
    key: "lastName",
    value: "Lastname",
  },
  {
    key: "emailAddress",
    value: "Email",
  },
  {
    key: "gender",
    value: "Gender",
  },
  {
    key: "phoneNumber",
    value: "Phone",
  },
];
const users = [
  {
    userId: 1,
    firstName: "Cort",
    lastName: "Tosh",
    emailAddress: "ctosh0@github.com",
    gender: "Male",
    phoneNumber: "327-626-5542",
  },
  {
    userId: 2,
    firstName: "Brianne",
    lastName: "Dzeniskevich",
    emailAddress: "bdzeniskevich1@hostgator.com",
    gender: "Female",
    phoneNumber: "144-190-8956",
  },
  {
    userId: 3,
    firstName: "Isadore",
    lastName: "Botler",
    emailAddress: "ibotler2@gmpg.org",
    gender: "Male",
    phoneNumber: "350-937-0792",
  },
  {
    userId: 4,
    firstName: "Janaya",
    lastName: "Klosges",
    emailAddress: "jklosges3@amazon.de",
    gender: "Female",
    phoneNumber: "502-438-7799",
  },
  {
    userId: 5,
    firstName: "Freddi",
    lastName: "Di Claudio",
    emailAddress: "fdiclaudio4@phoca.cz",
    gender: "Female",
    phoneNumber: "265-448-9627",
  },
  {
    userId: 6,
    firstName: "Oliy",
    lastName: "Mairs",
    emailAddress: "omairs5@fda.gov",
    gender: "Female",
    phoneNumber: "221-516-2295",
  },
  {
    userId: 7,
    firstName: "Tabb",
    lastName: "Wiseman",
    emailAddress: "twiseman6@friendfeed.com",
    gender: "Male",
    phoneNumber: "171-817-5020",
  },
  {
    userId: 8,
    firstName: "Joela",
    lastName: "Betteriss",
    emailAddress: "jbetteriss7@msu.edu",
    gender: "Female",
    phoneNumber: "481-100-9345",
  },
  {
    userId: 9,
    firstName: "Alistair",
    lastName: "Vasyagin",
    emailAddress: "avasyagin8@gnu.org",
    gender: "Male",
    phoneNumber: "520-669-8364",
  },
  {
    userId: 10,
    firstName: "Nealon",
    lastName: "Ratray",
    emailAddress: "nratray9@typepad.com",
    gender: "Male",
    phoneNumber: "993-654-9793",
  },
  {
    userId: 11,
    firstName: "Annissa",
    lastName: "Kissick",
    emailAddress: "akissicka@deliciousdays.com",
    gender: "Female",
    phoneNumber: "283-425-2705",
  },
  {
    userId: 12,
    firstName: "Nissie",
    lastName: "Sidnell",
    emailAddress: "nsidnellb@freewebs.com",
    gender: "Female",
    phoneNumber: "754-391-3116",
  },
  {
    userId: 13,
    firstName: "Madalena",
    lastName: "Fouch",
    emailAddress: "mfouchc@mozilla.org",
    gender: "Female",
    phoneNumber: "584-300-9004",
  },
  {
    userId: 14,
    firstName: "Rozina",
    lastName: "Atkins",
    emailAddress: "ratkinsd@japanpost.jp",
    gender: "Female",
    phoneNumber: "792-856-0845",
  },
  {
    userId: 15,
    firstName: "Lorelle",
    lastName: "Sandcroft",
    emailAddress: "lsandcrofte@google.nl",
    gender: "Female",
    phoneNumber: "882-911-7241",
  },
];

export const DemoTable = (props: any) => {
  const { users } = props;
  return (
    <div className="relative overflow-x-auto overflow-y-auto bg-white rounded-lg shadow whitespace-nowrap ">
      <table className="relative w-full bg-white border-collapse table-auto table-striped">
        <thead>
          <tr className="text-left">
            <th className="sticky top-0 px-3 py-2 bg-gray-100 border-b border-gray-200">
              <label className="inline-flex items-center justify-between px-2 py-2 text-teal-500 rounded-lg cursor-pointer hover:bg-gray-200">
                <input
                  type="checkbox"
                  className="form-checkbox focus:outline-none focus:shadow-outline"
                />
              </label>
            </th>
            {headings.map((heading, idx) => {
              return (
                <th className="sticky top-0 px-6 py-2 text-xs font-bold tracking-wider text-gray-600 uppercase bg-gray-100 border-b border-gray-200">
                  {heading.value}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {users.map((user: any, idx: number) => {
            return (
              <tr key={idx}>
                <td className="px-3 border-t border-gray-200 border-dashed">
                  <label className="inline-flex items-center justify-between px-2 py-2 text-teal-500 rounded-lg cursor-pointer hover:bg-gray-200">
                    <input
                      type="checkbox"
                      className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
                    />
                  </label>
                </td>
                <td className="border-t border-gray-200 border-dashed userId">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.userId}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed firstName">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.firstName}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed lastName">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.lastName}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed emailAddress">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.emailAddress}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed gender">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.gender}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed phoneNumber">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.phoneNumber}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

import React, { createContext, useContext } from 'react';

const RolesContext = createContext();

export const RolesProvider = ({ children, userRole }) => {
  const rolesPermissions = {
    Distributor: { Troubleshooting: true, Devices: false },
    RelationClients: { Troubleshooting: true, Devices: 'read-only' },
    Basic: { Troubleshooting: { Description: true, Analysis: true, Repair: false } },
    Expert: { Troubleshooting: { Description: true, Analysis: true, Repair: true } },
  };

  const userPermissions = rolesPermissions[userRole] || {};

  return (
    <RolesContext.Provider value={userPermissions}>
      {children}
    </RolesContext.Provider>
  );
};

export const useRoles = () => useContext(RolesContext);

/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  BungieMembershipType,
  ServerResponse
} from '../common';
import {
  GeneralUser,
  PublicPartnershipDetail,
  UserMembershipData,
  UserTheme
} from './interfaces';

export interface GetBungieNetUserByIdParams {
  /** The requested Bungie.net membership id. */
  id: string;
}

/** Loads a bungienet user by membership id. */
export function getBungieNetUserById(http: HttpClient, params: GetBungieNetUserByIdParams): Promise<ServerResponse<GeneralUser>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`
  });
}

export interface SearchUsersParams {
  /** The search string. */
  q?: string;
}

/** Returns a list of possible users based on the search string */
export function searchUsers(http: HttpClient, params: SearchUsersParams): Promise<ServerResponse<GeneralUser[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/SearchUsers/',
    params: {
      q: params.q
    }
  });
}

/** Returns a list of all available user themes. */
export function getAvailableThemes(http: HttpClient): Promise<ServerResponse<UserTheme[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/'
  });
}

export interface GetMembershipDataByIdParams {
  /** The membership ID of the target user. */
  membershipId: string;
  /** Type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}

/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 */
export function getMembershipDataById(http: HttpClient, params: GetMembershipDataByIdParams): Promise<ServerResponse<UserMembershipData>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  });
}

/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 */
export function getMembershipDataForCurrentUser(http: HttpClient): Promise<ServerResponse<UserMembershipData>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
  });
}

export interface GetPartnershipsParams {
  /** The ID of the member for whom partnerships should be returned. */
  membershipId: string;
}

/** Returns a user's linked Partnerships. */
export function getPartnerships(http: HttpClient, params: GetPartnershipsParams): Promise<ServerResponse<PublicPartnershipDetail[]>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/${params.membershipId}/Partnerships/`
  });
}
